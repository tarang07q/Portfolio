"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/project-placeholder.svg",
  className = "",
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={`${className} ${hasError ? "placeholder-image" : ""}`}
      onError={() => {
        setImgSrc(fallbackSrc);
        setHasError(true);
      }}
      priority
      loading="eager"
    />
  );
}
