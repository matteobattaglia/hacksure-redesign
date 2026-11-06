/** Per outbound provider attempt (Resend, Web3Forms, FormSubmit). */
export const PROVIDER_TIMEOUT_MS = 8_000;

/** Cap for reading the contact request body before delivery starts. */
export const REQUEST_BODY_TIMEOUT_MS = 5_000;

/**
 * Browser wait for the contact submission (Web3Forms, or POST /api/contact
 * when the access key is missing). Keeps the submit button from staying stuck.
 */
export const CONTACT_SUBMIT_TIMEOUT_MS = 15_000;

export class TimeoutError extends Error {
  constructor(message = "timeout") {
    super(message);
    this.name = "TimeoutError";
  }
}

export function isTimeoutError(error: unknown): boolean {
  return (
    error instanceof TimeoutError ||
    (error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError"))
  );
}

/**
 * Runs `work` with an AbortSignal that fires after `timeoutMs`.
 * The returned promise always settles: either with the result, the work error, or TimeoutError.
 */
export async function withTimeout<T>(
  work: (signal: AbortSignal) => Promise<T>,
  timeoutMs: number,
): Promise<T> {
  const controller = new AbortController();
  let timer: ReturnType<typeof setTimeout> | undefined;

  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(new TimeoutError());
    }, timeoutMs);
  });

  const guarded = Promise.resolve()
    .then(() => work(controller.signal))
    .then(
      (value) => value,
      (error: unknown) => {
        if (controller.signal.aborted) throw new TimeoutError();
        throw error;
      },
    );

  // If the timeout wins, `guarded` may still reject once the aborted request settles.
  void guarded.catch(() => undefined);

  try {
    return await Promise.race([guarded, timeout]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}
