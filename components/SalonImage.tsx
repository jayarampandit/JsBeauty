import Image, { type ImageProps } from "next/image";

export default function SalonImage({ alt, ...props }: ImageProps) {
  return <Image {...props} alt={alt} unoptimized />;
}
