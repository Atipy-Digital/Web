'use client';

import clsxm from '@/lib/clsxm';

import Logo from '@/components/common/logo/Logo';

import { DesktopNavbar } from './DesktopNavbar';
import { MobileMenu } from './mobile-menu/MobileMenu';
import { ToggleTheme } from './ToggleTheme';

import type { INavigation } from '@/ts/navigation';

type Props = {
  links: INavigation[];
  isTabbing: boolean;
};

export default function Header({ links, isTabbing }: Props) {
  const headerTopClass = isTabbing ? 'top-10' : 'top-0';

  return (
    <header
      role="banner"
      className={clsxm(
        headerTopClass,
        'px-fluid z-10',
        'tl bs-header w-full fixed left-0 right-0 h-[72px] md:h-28 flex items-center dark:border-b dark:border-b-white',
        'bg-white dark:bg-background overflow-hidden'
      )}
    >
      <Logo />

      <DesktopNavbar links={links} />

      <ToggleTheme />
      <MobileMenu links={links} />
    </header>
  );
}
