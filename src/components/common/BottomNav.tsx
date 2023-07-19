'use client';

import Link from 'next/link';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { ATIPY_ICON, AtipyIcon } from './icons/AtipyIcon';

type LinkType = {
  label: string;
  url: string;
};

type Props = {
  previousLink: LinkType;
  nextLink?: LinkType;
};

export const BottomNav = ({ previousLink, nextLink }: Props) => {
  const matchXL = useMediaQuery(MEDIA_QUERY.XL);
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  const smallSize = matchSM ? 'md' : 'lg';
  const size = matchXL ? 'mxl' : smallSize;
  return (
    <div className='relative z-[6] w-full shadow-project-filter flex items-center justify-between px-fluid !pt-6 !pb-6 xl:!pt-7 xl:!pb-7 dark:border-t dark:border-t-current bg-white dark:bg-black'>
      <Link
        href={previousLink.url}
        className='flex items-center gap-2 md:gap-4 lg:gap-6'
      >
        <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_LEFT} size={size} />
        <span className='link-hover-small text-[16px] md:text-body1'>
          {previousLink.label}
        </span>
      </Link>

      {nextLink && (
        <Link
          href={nextLink.url}
          className='flex items-center gap-2 md:gap-4 lg:gap-6'
        >
          <span className='link-hover-small text-[16px] md:text-body1'>
            {nextLink.label}
          </span>
          <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_RIGHT} size={size} />
        </Link>
      )}
    </div>
  );
};
