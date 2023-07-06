'use client';

import { ReactNode } from 'react';

import { useIsHydrated } from '@/hooks/use-is-hydrated';

import Header from './header/Header';
import Main from './Main';

import type { INavigation } from '@/ts/navigation';

type Props = {
  navLinks: INavigation[];
  children: ReactNode;
};

export const Layout = ({ navLinks, children }: Props) => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) return null;

  return (
    <>
      <Header links={navLinks} />
      <Main>{children}</Main>
    </>
  );
};
