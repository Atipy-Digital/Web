'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import { isClient } from '@/lib/constants';
import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import { AtipyImage } from '@/components/common/icons/AtipyImage';

import type { HomeBannerDataType } from '@/ts';

type Props = {
  data: HomeBannerDataType;
};

export const Banner = ({ data }: Props) => {
  const { prefixImg } = useTheme();

  const goToIntroSection = () => {
    if (!isClient) return;

    const el = document.getElementById('home-intro');

    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      as='section'
      className='flex items-center justify-center min-h-[calc(100vh_-_72px)] md:min-h-[calc(100vh_-_112px)]'
    >
      <div className='sm:px-fluid w-full flex flex-col gap-y-9 md:gap-y-14'>
        <h1 className='w-full lg:whitespace-nowrap'>
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
            <AtipyImage
              src={`/imgs/home/banner-${prefixImg}-home.webp`}
              isDecorative
            />
          </div>
          <motion.button
            className='tl flex-shrink-0 cursor-pointer mx-auto mt-10 md:mt-0 flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-[102px] lg:h-[102px]'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label='aller a la section intro'
            onClick={goToIntroSection}
          >
            <AtipyIcon type={ATIPY_ICON.ARROW_DOWN} size='full' isInformative />
          </motion.button>
        </div>
      </div>
    </Box>
  );
};
