import { ReactNode } from 'react';

import s from './styles.module.scss';

import clsxm from '@/lib/clsxm';

import { Box } from '@/components/common/Box';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className={clsxm(s.paddingFluid, 'tl w-full !pt-[72px] md:!pt-[116px]')}
    >
      <Box>{children}</Box>
    </main>
  );
}
