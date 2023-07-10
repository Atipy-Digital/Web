'use client';

import ReactMarkdown from 'react-markdown';

import { useTheme } from '@/hooks/use-theme';

import type { HomeAgencyDataType } from '@/ts';

type Props = {
  data: HomeAgencyDataType;
};

export const Agency = ({ data }: Props) => {
  const { prefixImg } = useTheme();
  return (
    <section className='tl px-fluid py-fluid relative w-full flex items-center flex-col md:flex-row gap-8 xl:gap-10'>
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

      <div className='relative flex-grow w-full max-w-[1315px]'>
        <img
          src={`/imgs/home/agency-${prefixImg}.webp`}
          alt='tree decoration'
          className='w-full object-contain 2xl:translate-x-1/3 flex-shrink-0'
        />
      </div>
    </section>
  );
};
