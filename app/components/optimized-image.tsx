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

  // Always add basePath in production for GitHub Pages
  const processedSrc = typeof src === 'string'
    ? (src.startsWith('/') && basePath
      ? `${basePath}${src}`
      : src)
    : src;

  const processedFallbackSrc = fallbackSrc.startsWith('/') && basePath
    ? `${basePath}${fallbackSrc}`
    : fallbackSrc;

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
