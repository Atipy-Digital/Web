'use client';

import { ReactNode } from 'react';

import { useIsHydrated } from '@/hooks/use-is-hydrated';

import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './Main';
import { ScrollUp } from '../common/ScrollUp';

import type { IFooter } from '@/ts';
import type { INavigation } from '@/ts/navigation';

type Props = {
  navLinks: INavigation[];
  children: ReactNode;
  footerLinks: IFooter;
};

export const Layout = ({ navLinks, footerLinks, children }: Props) => {
  const isHydrated = useIsHydrated();

  if (!isHydrated) return null;

  return (
    <>
      <ScrollUp />
      <Header links={navLinks} />
      <Main>{children}</Main>
      <Footer data={footerLinks} />
    </>
  );
};
