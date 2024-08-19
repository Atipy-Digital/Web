import { ImageProps } from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

interface AtipyImageProps extends Omit<ImageProps, 'alt'> {
  isInformative?: boolean;
  isDecorative?: boolean;
  altText?: string;
  className?: string;
}

export const AtipyImage: React.FC<AtipyImageProps> = ({
  isInformative = false,
  isDecorative = true,
  altText = '',
  className,
  ...props
}) => {
  if (isInformative && isDecorative) {
    console.warn(
      'AtipyImage cannot be both informative and decorative. Treating as informative.'
    );
    isDecorative = false;
  }

  if (isInformative && !altText) {
    console.warn(
      'Informative image should have an altText. Please provide a description.'
    );
  }

  if (!isInformative && altText) {
    console.warn(
      'altText provided for a non-informative image will be ignored.'
    );
  }

  const alt = isInformative ? altText : '';

  return (
    <img
      className={clsxm(className)}
      alt={alt}
      aria-hidden={isDecorative ? 'true' : undefined}
      {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
};
