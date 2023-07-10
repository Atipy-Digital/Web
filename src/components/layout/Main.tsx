import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='tl w-full !pt-[72px] md:!pt-[112px] min-h-[calc(100vh_-_220px)] !pb-4 md:!pb-6 lg:!pb-8 xl:!pb-10 overflow-x-hidden'>
      {children}
    </main>
  );
}
