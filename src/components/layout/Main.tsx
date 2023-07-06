import { ReactNode } from 'react';

import s from './styles.module.scss';

import clsxm from '@/lib/clsxm';

import { Container } from '../common/Container';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className={clsxm(s.paddingFluid, 'tl w-full !pt-[72px] md:!pt-[116px]')}
    >
      <Container>{children}</Container>
    </main>
  );
}
