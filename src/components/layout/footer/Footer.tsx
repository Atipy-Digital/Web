'use client';

import { FooterMenuSocial } from './FooterMenuSocial';
import { FooterMenuText } from './FooterMenuText';

import type { IFooter } from '@/ts';

type Props = {
  data: IFooter;
};

export default function Footer({ data }: Props) {
  return (
    <footer className='w-full border-t border-t-current relative z-[6] bg-white dark:bg-black'>
      <div className='w-full flex items-center flex-col justify-between h-full'>
        <nav className='tl px-fluid flex flex-col md:flex-row items-center justify-between flex-grow w-full gap-y-6 md:gap-y-0 !py-4 lg:!py-6 xl:!py-8'>
          <FooterMenuText {...data.menuText1} />
          <FooterMenuText {...data.menuText2} />
          <FooterMenuSocial {...data.menuSocial} />
        </nav>

        <div className='px-fluid md:bg-black w-full'>
          <p className='block text-center py-2 text-[14px] md:text-white'>
            ©&nbsp;Atipy&nbsp;{new Date().getFullYear()}
            &nbsp;•&nbsp;Tous&nbsp;droits&nbsp;réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
