'use client';

import {ReactNode, useEffect, useState} from 'react';

import {useIsHydrated} from '@/hooks/use-is-hydrated';

import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './Main';
import {ScrollUp} from '../common/ScrollUp';

import type {IFooter} from '@/ts';
import type {INavigation} from '@/ts/navigation';
import SkipLink from "@/components/common/SkipLink";

type Props = {
  navLinks: INavigation[];
  children: ReactNode;
  footerLinks: IFooter | null;
};

export const Layout = ({navLinks, footerLinks, children}: Props) => {
  const isHydrated = useIsHydrated();
  const [isTabbing, setIsTabbing] = useState(false)

  useEffect(() => {
    const handleClassChange = () => {
      setIsTabbing(document.body.classList.contains('user-is-tabbing'));
    };

    handleClassChange();

    const observer = new MutationObserver(handleClassChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect()
  }, []);

  if (!isHydrated) return null;

  return (
    <>
      {isTabbing && <SkipLink isTabbing={isTabbing}/>}
      <ScrollUp/>
      <Header links={navLinks} isTabbing={isTabbing}/>
      <Main>{children}</Main>
      {footerLinks && <Footer data={footerLinks}/>}
    </>
  );
};
