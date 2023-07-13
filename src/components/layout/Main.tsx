import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='tl w-full !mt-[72px] md:!mt-[112px] !pb-4 md:!pb-6 lg:!pb-8 xl:!pb-10 overflow-x-hidden'>
      {children}
    </main>
  );
}
