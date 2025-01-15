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
      'AtipyImage ne peut pas être à la fois informatif et décoratif. Il sera traité comme décoratif.'
    );
    isInformative = false;
    isDecorative = true;
  }

  const alt = isInformative ? altText : '';

  return (
    <img
      className={clsxm(className)}
      alt={alt}
      {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
    />
  );
};
