'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import s from './styles.module.scss';

import clsxm from '@/lib/clsxm';
import { usePreventScroll } from '@/hooks/use-prevents-scroll';

import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import Logo from '@/components/common/logo/Logo';
import { Portal } from '@/components/primitives/Portal';

import { useAppStore } from '@/store/use-app-store';

import type { INavigation } from '@/ts/navigation';

export const MobileMenu = ({ links }: { links: INavigation[] }) => {
  const { isOpenModalMenu, setOpenModalMenu } = useAppStore();
  const pathname = usePathname();
  const closeMenu = () => setOpenModalMenu(false);
  const openMenu = () => setOpenModalMenu(true);
  usePreventScroll(isOpenModalMenu);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableElement = useRef<HTMLElement | null>(null);
  const lastFocusableElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenModalMenu(false);
      } else if (e.key === 'Tab' && isOpenModalMenu) {
        trapFocus(e);
      }
    };

    const trapFocus = (e: KeyboardEvent) => {
      if (!firstFocusableElement.current || !lastFocusableElement.current)
        return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement.current) {
          e.preventDefault();
          lastFocusableElement.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement.current) {
          e.preventDefault();
          firstFocusableElement.current?.focus();
        }
      }
    };

    if (isOpenModalMenu) {
      document.addEventListener('keydown', handleKeyDown);
      // Ajout d'un délai pour s'assurer que la modale est rendue
      setTimeout(() => {
        if (modalRef.current) {
          const focusableElements =
            modalRef.current.querySelectorAll<HTMLElement>(
              'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
            );
          if (focusableElements.length > 0) {
            firstFocusableElement.current = focusableElements[0];
            lastFocusableElement.current =
              focusableElements[focusableElements.length - 1];
            firstFocusableElement.current?.focus();
          }
        }
      }, 100); // Délai de 100 ms pour s'assurer que la modale est rendue
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenModalMenu, setOpenModalMenu]);

  const handleClick = (link: string) => {
    if (link === pathname) {
      closeMenu();
    }
  };

  return (
    <>
      <button
        role='button'
        className={clsxm(s.icon, s.burger)}
        onClick={openMenu}
        aria-label='ouverture du menu mobile'
        aria-labelledby='menuMobileTextOpen'
        tabIndex={0}
      >
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
      <span className='sr-only' id='menuMobileTextOpen'>
        ouverture du menu mobile
      </span>
      {isOpenModalMenu && (
        <Portal id='menu-modal'>
          <div
            className={clsxm(s.menuContainer, 'bg-white dark:bg-background')}
            ref={modalRef}
            tabIndex={-1}
          >
            <header className={clsxm(s.header, 'px-fluid')}>
              <Logo />
              <button
                role='button'
                className={s.icon}
                onClick={closeMenu}
                aria-label='fermeture du menu mobile'
                aria-labelledby='menuMobileTextClose'
                tabIndex={0}
              >
                <AtipyIcon
                  isInformative
                  type={ATIPY_ICON.CROSS}
                  size='xl'
                  className='w-11 h-11'
                />
              </button>
              <span className='sr-only' id='menuMobileTextClose'>
                fermeture du menu mobile
              </span>
            </header>
            <nav className={s.menuLinksContainer}>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    key={link}
                    className={clsxm(
                      pathname.includes(link) && s.menuLinksActive
                    )}
                  >
                    <Link
                      className={s.menuLinks}
                      href={link}
                      onClick={() => handleClick(link)}
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
