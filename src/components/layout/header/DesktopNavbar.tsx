'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsxm from '@/lib/clsxm';

import type { INavigation } from '@/ts/navigation';

const NavItem = ({ link, name }: INavigation) => {
  const pathname = usePathname();

  const isActive = pathname.includes(link);
  return (
    <li key={link} className={clsxm('link-hover', isActive && 'active')}>
      <Link
        href={link}
        className='tl text-base lg:text-lg xl:text-[22px] 3xl:text-2xl leading-none'
      >
        {name}
      </Link>
    </li>
  );
};

export const DesktopNavbar = ({ links }: { links: INavigation[] }) => {
  return (
    <nav role="navigation" aria-label="Menu principal" className='ml-auto hidden md:block'>
      <ul className='tl flex items-center gap-x-4 lg:gap-x-6 xl:gap-x-9'>
        {links.map(({ link, name }) => (
          <NavItem key={link} link={link} name={name} />
        ))}
      </ul>
    </nav>
  );
};
