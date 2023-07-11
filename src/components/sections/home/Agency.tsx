'use client';

import ReactMarkdown from 'react-markdown';

import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';

import type { HomeAgencyDataType } from '@/ts';

type Props = {
  data: HomeAgencyDataType;
};

export const Agency = ({ data }: Props) => {
  const { prefixImg } = useTheme();
  return (
    <Box as='section' className='tl mb-14 md:mb-16 lg:mb-20 xl:lg:mb-24'>
      <div className='tl px-fluid py-fluid relative w-full'>
        <div className='w-full flex items-center flex-col md:flex-row gap-8 xl:gap-10'>
          <div className='w-full max-w-[694px] flex-grow'>
            <h3 className='tl mb-8 lg:mb-10 xl:mb-12'>{data.title}</h3>
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className='w-full font-secondary font-normal leading-tight text-body1'>
                    {children}
                  </p>
                ),
              }}
            >
              {data.body}
            </ReactMarkdown>
          </div>

          <div className='hidden md:block relative flex-grow w-full max-w-[1315px]'>
            <img
              src={`/imgs/home/agency-${prefixImg}.webp`}
              alt='tree decoration'
              className='w-full object-contain 2xl:translate-x-1/3 flex-shrink-0'
            />
          </div>
        </div>

        <div className='w-full flex flex-col-reverse md:flex-row items-center gap-y-6 gap-x-10 mt-10 xl:mt-14'>
          <Button icon>{data.buttonCta.label}</Button>
          <Button
            variant='secondary'
            className='border-a-yellow hover:bg-a-yellow hover:text-black dark:border-a-yellow hover:dark:bg-a-yellow hover:dark:text-black'
          >
            {data.buttonEngagement.label}
          </Button>
        </div>
      </div>
    </Box>
  );
};
