'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import { useTheme } from '@/hooks/use-theme';

import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';

import type { HomeBannerDataType } from '@/ts';

type Props = {
  data: HomeBannerDataType;
};

export const Banner = ({ data }: Props) => {
  const { prefixImg } = useTheme();

  return (
    <section className='px-fluid flex items-center justify-center h-[calc(100vh_-_72px)] md:h-[calc(100vh_-_112px)]'>
      <div className='w-full flex flex-col gap-y-9 md:gap-y-14'>
        <h1 className='w-full'>
          <ReactMarkdown
            components={{
              em: 'span',
            }}
          >
            {data.title}
          </ReactMarkdown>
        </h1>
        <div className='w-full flex items-center flex-col md:flex-row md:gap-x-[3vw]'>
          <div className='w-full flex-grow max-w-[936px]'>
            <img
              src={`/imgs/home/banner-${prefixImg}-home.webp`}
              alt='banner home'
              className='w-full object-cover object-center'
            />
          </div>
          <motion.a
            className='tl flex-shrink-0 cursor-pointer mx-auto mt-10 md:mt-0 flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-[102px] lg:h-[102px]'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='#home-intro'
            aria-label='aller a la section intro'
          >
            <AtipyIcon type={ATIPY_ICON.ARROW_DOWN} size='full' />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
