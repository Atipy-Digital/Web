'use client';

import { ReactNode } from 'react';

import { WrapperScrollToTop } from './WrapperScrollToTop';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='tl relative w-full !mt-[72px] md:!mt-[112px] overflow-x-hidden'>
      {children}
      <WrapperScrollToTop />
    </main>
  );
}
