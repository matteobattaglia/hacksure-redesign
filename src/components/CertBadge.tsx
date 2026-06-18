import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function CertBadge({ src, alt, size = 72, className = "" }: Props) {
  const isSvg = src.endsWith(".svg");

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-xl border border-zinc-800/80 bg-surface-800/50 p-1.5 ${className}`}
      style={{ width: size, height: size }}
    >
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-contain" loading="lazy" />
      ) : (
        <Image src={src} alt={alt} fill className="object-contain p-1" sizes={`${size}px`} />
      )}
    </div>
  );
}
