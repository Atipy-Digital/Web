'use client';

import { ReactNode } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { WrapperScrollToTop } from './WrapperScrollToTop';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      id='main-content'
      role='main'
      className='tl relative w-full !mt-[72px] md:!mt-[112px] overflow-x-hidden bg-white dark:bg-black'
    >
      {children}
      <WrapperScrollToTop />
    </main>
  );
}
