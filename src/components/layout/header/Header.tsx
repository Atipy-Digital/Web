'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

import s from '../styles.module.scss';

import clsxm from '@/lib/clsxm';

import { DesktopNavbar } from './DesktopNavbar';
import { LogoBlack } from './LogoBlack';
import LogoWhite from './LogoWhite';
import { MobileMenu } from './mobile-menu/MobileMenu';
import { ToggleTheme } from './ToggleTheme';

import type { INavigation } from '@/ts/navigation';

type Props = {
  links: INavigation[];
};

export default function Header({ links }: Props) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <header
      className={clsxm(
        s.paddingFluid,
        'tl bs-header fixed top-0 w-full left-0 right-0 h-[72px] md:h-28 flex items-center dark:border-b dark:border-b-white'
      )}
    >
      <Link href='/' className='flex-shrink-0'>
        {isDark ? <LogoWhite /> : <LogoBlack />}
      </Link>

      <DesktopNavbar links={links} />

      <ToggleTheme />
      <MobileMenu links={links} isDark={isDark} />
    </header>
  );
}
