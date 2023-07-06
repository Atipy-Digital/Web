'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './styles.module.scss';

import clsxm from '@/lib/clsxm';
import { usePreventScroll } from '@/hooks/use-prevents-scroll';

import { Portal } from '@/components/Portal';

import { useAppStore } from '@/store/use-app-store';

import { LogoBlack } from '../LogoBlack';
import LogoWhite from '../LogoWhite';

import type { INavigation } from '@/ts/navigation';

export const MobileMenu = ({
  links,
  isDark,
}: {
  links: INavigation[];
  isDark: boolean;
}) => {
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
            <header className={s.header}>
              <Link href='/' className={s.logo}>
                {isDark ? <LogoWhite /> : <LogoBlack />}
              </Link>
              <button className={s.icon} onClick={closeMenu}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'>
                  <path
                    d='M1 8h24v2H1z'
                    fill='currentColor'
                    data-svg-origin='13 9'
                    data-original='M1 8h15v2H1z'
                    transform='matrix(0.70711,0.70711,-0.70711,0.70711,10.17156,-0.55642)'
                  ></path>
                  <line
                    x1='1'
                    y1='15'
                    x2='25'
                    y2='15'
                    stroke='currentColor'
                    strokeWidth='2'
                    data-svg-origin='13 15'
                    transform='matrix(0.1,0,0,0.1,11.7,13.5)'
                  ></line>
                  <path
                    d='M1 20h24v2H1z'
                    fill='currentColor'
                    data-svg-origin='13 21'
                    transform='matrix(0.70711,-0.70711,0.70711,0.70711,-11.04174,9.34312)'
                  ></path>
                </svg>
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
