'use client';

import { usePathname } from 'next/navigation';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { ScrollToTopButton } from '../common/ScrollToTopButton';

const NOT_ALLOWED_PATH = ['/expertises', '/agence', '/posts', '/contact'];

export const WrapperScrollToTop = () => {
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  const pathname = usePathname();

  if (NOT_ALLOWED_PATH.some((path) => path === pathname) && !matchSM) {
    return null;
  }

  return <ScrollToTopButton />;
};
