import Image from 'next/image';

type BrandIconProps = {
  size?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
};

export function BrandIcon({
  size = 32,
  className,
  alt = 'NextDash icon',
  priority = false,
}: BrandIconProps) {
  return (
    <Image
      src="/images/nextdash-icon.svg"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
