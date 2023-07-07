import { ReactNode } from 'react';

import { Box } from '@/components/common/Box';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className='paddingFluid tl w-full !pt-[72px] md:!pt-[112px] min-h-[calc(100vh_-_220px)] !pb-4 md:!pb-6 lg:!pb-8 xl:!pb-10'>
      <Box>{children}</Box>
    </main>
  );
}
