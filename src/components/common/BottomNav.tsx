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
    <div className='relative z-[6] w-full shadow-project-filter flex items-center justify-between px-fluid !pt-6 !pb-6 xl:!pt-7 xl:!pb-7 dark:border-t dark:border-t-current bg-white dark:bg-background gap-4'>
      <div className='flex items-center flex-1 w-1/2'>
        <Link
          href={previousLink.url}
          className='grid grid-cols-[auto_1fr] gap-2 lg:gap-4 xl:gap-6 leading-none mr-auto'
        >
          <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_LEFT} size={size} />
          <span className='block line-truncate link-to-hover text-right text-[16px] md:text-body1 !leading-none my-auto'>
            {previousLink.label}
          </span>
        </Link>
      </div>

      {nextLink && (
        <div className='flex items-center flex-1 w-1/2'>
          <Link
            href={nextLink.url}
            className='grid grid-cols-[auto_1fr] gap-2 lg:gap-4 xl:gap-6 leading-none ml-auto'
          >
            <span className='block line-truncate link-to-hover text-right text-[16px] md:text-body1 !leading-none my-auto'>
              {nextLink.label}
            </span>
            <AtipyIcon type={ATIPY_ICON.ARROW_CIRCLE_RIGHT} size={size} />
          </Link>
        </div>
      )}
    </div>
  );
};
