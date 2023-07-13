'use client';

import { ATIPY_ICON, AtipyIcon } from './icons/AtipyIcon';

type LinkProps = {
  label: string;
  url: string;
};

type Props = {
  links?: LinkProps[];
  currentLink: LinkProps;
};

export const Breadcrumb = ({ links, currentLink }: Props) => {
  return (
    <nav
      className='w-full flex items-center justify-center'
      aria-label='Breadcrumb'
    >
      <ul className='flex items-center justify-center md:justify-start gap-1 flex-wrap'>
        <li className='tl flex items-center justify-center gap-1 h-[32px] md:h-auto text-[15px] md:text-[16px] lg:text-[18px]'>
          <a href='/' className='leading-normal hover:underline'>
            Accueil
          </a>
        </li>
        {links?.map(({ label, url }) => (
          <li
            key={`Breadcrumb-link-${label}`}
            className='tl flex items-center justify-center gap-1 h-[32px] md:h-auto text-[15px] md:text-[16px] lg:text-[18px]'
          >
            <div className='line-clamp-1'>
              <AtipyIcon
                type={ATIPY_ICON.ARROW_RIGHT}
                size='sm'
                className='mr-1 inline-block'
              />
              <a href={url} className='leading-normal hover:underline'>
                {label}
              </a>
            </div>
          </li>
        ))}
        <li className='tl flex items-center justify-center gap-1 h-[32px] md:h-auto text-[15px] md:text-[16px] lg:text-[18px] font-bold'>
          <div className='line-clamp-1'>
            <AtipyIcon
              type={ATIPY_ICON.ARROW_RIGHT}
              size='sm'
              className='mr-1 inline-block'
            />
            <a
              href={currentLink.url}
              className='leading-normal hover:underline'
            >
              {currentLink.label}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
