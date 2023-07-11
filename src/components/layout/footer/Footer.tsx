import Logo from '@/components/common/logo/Logo';

import { FooterMenuSocial } from './FooterMenuSocial';
import { FooterMenuText } from './FooterMenuText';

import type { IFooter } from '@/ts';

type Props = {
  data: IFooter;
};

export default function Footer({ data }: Props) {
  return (
    <footer className='px-fluid w-full min-h-[167px] border-t border-t-current'>
      <div className='tl w-full py-4 lg:py-6 xl:py-10 flex items-center flex-col justify-between h-full'>
        <nav className='tl flex flex-col md:flex-row items-center justify-between flex-grow w-full gap-y-6 md:gap-y-0'>
          <Logo />
          <FooterMenuText {...data.menuText1} />
          <FooterMenuText {...data.menuText2} />
          <FooterMenuSocial {...data.menuSocial} />
        </nav>

        <p className='block text-center mt-5 text-[14px] text-black-160 dark:text-grey-150'>
          ©&nbsp;Atipy&nbsp;{new Date().getFullYear()}
          &nbsp;•&nbsp;Tous&nbsp;droits&nbsp;réservés
        </p>
      </div>
    </footer>
  );
}
