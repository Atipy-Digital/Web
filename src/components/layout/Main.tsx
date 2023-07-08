import { ReactNode } from 'react';

import { Box } from '@/components/common/Box';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='px-fluid tl w-full !pt-[72px] md:!pt-[112px] min-h-[calc(100vh_-_220px)] !pb-4 md:!pb-6 lg:!pb-8 xl:!pb-10 overflow-x-hidden'>
      <Box>{children}</Box>
    </main>
  );
}
