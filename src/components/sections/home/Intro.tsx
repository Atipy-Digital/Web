'use client';

import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { AtipyImage } from '@/components/common/icons/AtipyImage';
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
      <div className='tl sm:px-fluid md:py-fluid relative w-full flex items-center flex-col lg:flex-row'>
        <h2 className='lg:max-w-[740px] xl:max-w-[840px]'>
          <ReactMarkdown
            components={{
              em: 'span',
            }}
          >
            {data.title}
          </ReactMarkdown>
        </h2>
        <div className='tl hidden md:flex items-center justify-center max-w-[369px] lg:ml-8 mt-8 lg:mt-0'>
          <AtipyImage
            isDecorative
            className='ta w-full object-center object-cover xl:-translate-y-24'
            src={`/imgs/home/intro-${prefixImg}-home.webp`}
          />
          <Button
            icon
            className='tl absolute 2xl:ml-52 flex-shrink-0'
            onClick={onClick}
          >
            {data.button.label}
          </Button>
        </div>

        <Button
          icon
          className='flex md:hidden mt-10 tl flex-shrink-0'
          onClick={onClick}
        >
          {data.button.label}
        </Button>
      </div>
    </Box>
  );
};
