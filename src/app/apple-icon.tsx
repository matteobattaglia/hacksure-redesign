import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0e",
          borderRadius: 36,
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ea580c"
            d="M16 6.5c-2.9 0-5.25 2.2-5.25 4.9V14H9.2A1.7 1.7 0 0 0 7.5 15.7v8.6c0 .94.76 1.7 1.7 1.7h13.6c.94 0 1.7-.76 1.7-1.7v-8.6c0-.94-.76-1.7-1.7-1.7h-1.55v-2.6c0-2.7-2.35-4.9-5.25-4.9Zm-3.25 4.9c0-1.68 1.46-3.05 3.25-3.05s3.25 1.37 3.25 3.05V14h-6.5v-2.6ZM16 18.2a1.6 1.6 0 0 1 .8 2.98v1.72a.8.8 0 1 1-1.6 0v-1.72A1.6 1.6 0 0 1 16 18.2Z"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
