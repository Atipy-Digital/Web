'use client';

import { ATIPY_ICON, AtipyIcon } from './icons/AtipyIcon';

export type BreadcrumbLinkProps = {
  label: string;
  url: string;
};

type Props = {
  links?: BreadcrumbLinkProps[];
  currentLink: BreadcrumbLinkProps;
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
            <div className='grid grid-cols-[auto_1fr]'>
              <div className='flex items-center justify-center whitespace-nowrap'>
                <AtipyIcon
                  type={ATIPY_ICON.ARROW_RIGHT}
                  size='sm'
                  className='mr-1 whitespace-nowrap'
                />
              </div>
              <a
                href={url}
                className='block line-truncate leading-normal hover:underline'
              >
                {label}
              </a>
            </div>
          </li>
        ))}
        <li className='tl flex items-center justify-center gap-1 h-[32px] md:h-auto text-[15px] md:text-[16px] lg:text-[18px] font-bold'>
          <div className='grid grid-cols-[auto_1fr]'>
            <div className='flex items-center justify-center whitespace-nowrap'>
              <AtipyIcon
                type={ATIPY_ICON.ARROW_RIGHT}
                size='sm'
                className='mr-1 whitespace-nowrap'
              />
            </div>
            <a
              href={currentLink.url}
              className='block line-truncate leading-normal hover:underline'
            >
              {currentLink.label}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
