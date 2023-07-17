'use client';

import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';

import type { HomeIntroDataType } from '@/ts';

type Props = {
  data: HomeIntroDataType;
};

export const Intro = ({ data }: Props) => {
  const { prefixImg } = useTheme();
  const { push } = useRouter();

  const onClick = () => {
    push(data.button.url);
  };
  return (
    <Box as='section' id='home-intro'>
      <div className='tl sm:px-fluid py-fluid !pb-0 relative w-full flex items-center flex-col lg:flex-row'>
        <h2 className='lg:max-w-[740px] xl:max-w-[840px]'>
          <ReactMarkdown
            components={{
              em: 'span',
            }}
          >
            {data.title}
          </ReactMarkdown>
        </h2>
        <div className='tl flex items-center justify-center max-w-[369px] lg:ml-8 mt-8 lg:mt-0'>
          <img
            src={`/imgs/home/intro-${prefixImg}-home.webp`}
            alt='intro home'
            className='ta w-full object-center object-cover xl:-translate-y-24'
          />
          <Button icon className='tl absolute xl:ml-52' onClick={onClick}>
            {data.button.label}
          </Button>
        </div>
      </div>
    </Box>
  );
};
