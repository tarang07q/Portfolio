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
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';

  // For dynamic deployment, we don't need to modify paths
  const processedSrc = src;
  const processedFallbackSrc = fallbackSrc;

  const [imgSrc, setImgSrc] = useState(processedSrc);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={`${className} ${hasError ? "placeholder-image" : ""}`}
      onError={() => {
        setImgSrc(processedFallbackSrc);
        setHasError(true);
      }}
      priority
      loading="eager"
    />
  );
}
