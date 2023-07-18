'use client';

import { ReactNode } from 'react';

import { ScrollToTopButton } from '../common/ScrollToTopButton';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='tl relative w-full !mt-[72px] md:!mt-[112px] overflow-x-hidden'>
      {children}
      <ScrollToTopButton />
    </main>
  );
}
