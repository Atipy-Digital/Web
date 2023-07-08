'use client';

import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { useTheme } from '@/hooks/use-theme';

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
    <section
      className='tl px-fluid py-fluid relative w-full flex items-center flex-col md:flex-row'
      id='home-intro'
    >
      <h2>
        <ReactMarkdown
          components={{
            em: 'span',
          }}
        >
          {data.title}
        </ReactMarkdown>
      </h2>
      <div className='tl flex items-center justify-center max-w-[369px] lg:ml-8'>
        <img
          src={`/imgs/home/intro-${prefixImg}-home.webp`}
          alt='intro home'
          className='ta w-full object-center object-cover xl:-translate-y-24'
        />
        <Button icon className='tl absolute xl:ml-52' onClick={onClick}>
          {data.button.label}
        </Button>
      </div>
    </section>
  );
};
