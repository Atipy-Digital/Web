'use client';

import { ReactElement } from 'react';

import clsxm from '@/lib/clsxm';
import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';
import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { MarkdownText } from '@/components/primitives/MarkdownText';
import { OfferList } from '@/components/primitives/OfferList';

import type { AboutType } from '@/ts';

type Props = {
  data: AboutType;
};

type SectionProps = {
  img: { url: string; alt: string };
  title?: string;
  year?: string;
  text: ReactElement;
  color?: string;
  reverse?: boolean;
  imgClassName?: string;
  textClassName?: string;
};

const Section = ({
  img,
  title,
  year,
  text,
  color,
  reverse = false,
  imgClassName,
  textClassName,
}: SectionProps) => (
  <div
    className={clsxm(
      'tl sm:px2-fluid lg:px-fluid w-full grid gap-6 md:gap-12 xl:gap-20 mb-10 md:mb-14 lg:mb-16 xl:mb-24',
      'grid-cols-1 md:grid-cols-2'
    )}
  >
    <div className={clsxm('w-full', imgClassName)}>
      <img
        src={img.url}
        alt={img.alt}
        className='w-full h-auto rounded-[10px]'
        aria-hidden={true}
      />
    </div>

    <div
      className={clsxm(
        'w-full flex flex-col',
        !reverse ? 'order-1' : '-order-1',
        textClassName
      )}
    >
      {title && year && color && (
        <h3 className='text-[24px] md:h3'>
          <p>{title}</p>
          <p
            className={clsxm(
              color,
              'text-[28px] md:h3 lg:!text-[56px] xl:!text-[70px]'
            )}
          >
            {year}
          </p>
        </h3>
      )}

      {text}
    </div>
  </div>
);

export const AboutSection = ({ data }: Props) => {
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  const { prefixImg } = useTheme();
  return (
    <Box
      as='section'
      className='tl sm:px2-fluid lg:px-fluid mb-10 md:mb-14 lg:mb-16 xl:mb-20 !pt-0 !pb-0 md:py-fluid xl:!pt-0'
    >
      <Section
        title='Naissance en'
        year='2013'
        color='text-a-blue-dark dark:text-a-blue-light'
        text={
          <MarkdownText className='!text-body2 !font-primary mt-6 lg:mt-8'>
            {data.naissance}
          </MarkdownText>
        }
        img={{
          url: `/imgs/about/naissance-${prefixImg}-qui_sommes_nous.webp`,
          alt: 'naissance Atipy',
        }}
        textClassName='md:justify-center'
      />
      <Section
        title='Fusion en'
        year='2021'
        color='text-a-red-dark dark:text-a-red-light'
        text={
          <MarkdownText
            className='!text-body2 !font-primary mt-6 lg:mt-auto'
            components={{
              strong: ({ children }) => (
                <strong>{children}</strong>
              ),
            }}
          >
            {data.fusion}
          </MarkdownText>
        }
        img={{
          url: `/imgs/about/fusion-${prefixImg}-qui_sommes_nous.webp`,
          alt: 'fusion Atipy',
        }}
        reverse={!matchSM}
        imgClassName='max-w-[504px]'
        textClassName='md:justify-center lg:justify-start'
      />
      <Section
        text={
          <MarkdownText className='!text-body2 !font-primary md:mt-auto'>
            {data.fusion2}
          </MarkdownText>
        }
        img={{
          url: `/imgs/about/fusion2-${prefixImg}-qui_sommes_nous.webp`,
          alt: 'experiences Atipy',
        }}
        imgClassName='max-w-[550px]'
      />

      <div className='w-full sm:px-fluid !pt-0 !pb-0 md:py-fluid'>
        <h2 className='h3 mb-6 md:mb-10'>Les enjeux</h2>
        <MarkdownText
          className='w-full text-body1 font-secondary mb-6 md:mb-8'
          components={{
            strong: ({ children }) => (
              <strong className='font-primary'>{children}</strong>
            ),
          }}
        >
          {data.challenges}
        </MarkdownText>
      </div>

      <div className='w-full sm:px-fluid py-fluid'>
        <h2 className='h3 md:mb-10'>{`Nos ${data.cards.length} pôles`}</h2>

        <div>
          <OfferList data={data.cards} className='!px-0 !pr-0 !pl-0' />
        </div>
      </div>
    </Box>
  );
};
