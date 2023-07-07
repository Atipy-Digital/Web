'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './styles.module.scss';

import clsxm from '@/lib/clsxm';
import { usePreventScroll } from '@/hooks/use-prevents-scroll';

import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import Logo from '@/components/common/logo/Logo';
import { Portal } from '@/components/Portal';

import { useAppStore } from '@/store/use-app-store';

import type { INavigation } from '@/ts/navigation';

export const MobileMenu = ({ links }: { links: INavigation[] }) => {
  const { isOpenModalMenu, setOpenModalMenu } = useAppStore();
  const pathname = usePathname();
  const closeMenu = () => setOpenModalMenu(false);
  const openMenu = () => setOpenModalMenu(true);
  usePreventScroll(isOpenModalMenu);

  const onClick = (path: string) => {
    if (path === pathname) {
      closeMenu();
    }
  };

  return (
    <>
      <button className={clsxm(s.icon, s.burger)} onClick={openMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 28 28'
          className='w-full'
        >
          <path d='M1 8h15v2H1z' fill='currentColor'></path>
          <line
            x1='1'
            y1='15'
            x2='25'
            y2='15'
            stroke='currentColor'
            strokeWidth='2'
          ></line>
          <path d='M1 20h24v2H1z' fill='currentColor'></path>
        </svg>
      </button>
      {isOpenModalMenu && (
        <Portal id='menu-modal'>
          <div className={clsxm(s.menuContainer, 'bg-white dark:bg-black')}>
            <header className={clsxm(s.header, 'paddingFluid')}>
              <Link href='/' className={s.logo} onClick={() => onClick('/')}>
                <Logo />
              </Link>
              <button className={s.icon} onClick={closeMenu}>
                <AtipyIcon
                  type={ATIPY_ICON.CROSS}
                  size='xl'
                  className='w-11 h-11'
                />
              </button>
            </header>
            <nav className={s.menuLinksContainer}>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    key={link}
                    className={clsxm(pathname === link && s.menuLinksActive)}
                  >
                    <Link
                      className={s.menuLinks}
                      href={link}
                      onClick={() => onClick(link)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Portal>
      )}
    </>
  );
};
