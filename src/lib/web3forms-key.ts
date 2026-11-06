/**
 * Web3Forms access keys are public. Read this in a Server Component and pass
 * the value to ContactForm. Do not prefix it with NEXT_PUBLIC_.
 */
export function getWeb3FormsAccessKey(): string {
  return process.env.WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}
