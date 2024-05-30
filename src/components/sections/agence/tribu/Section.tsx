'use client';

import clsxm from '@/lib/clsxm';
import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';
import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { MarkdownText } from '@/components/primitives/MarkdownText';
import { TeamList } from '@/components/primitives/TeamList';

import type { TribuPageType } from '@/ts';

type Props = {
  data: TribuPageType;
};

type SectionProps = {
  text: string;
  img?: { url: string; alt: string };
  imgClassName?: string;
  textClassName?: string;
  reverse?: boolean;
  markTextClassName?: string;
};

const Section = ({
  text,
  img,
  reverse = false,
  imgClassName,
  textClassName,
  markTextClassName,
}: SectionProps) => (
  <section
    className={clsxm(
      'tl sm:px2-fluid lg:px-fluid w-full grid gap-6 md:gap-12 xl:gap-24 mb-10 md:mb-14 lg:mb-16 xl:mb-24',
      img ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
    )}
  >
    {img && (
      <div>
        <img
          src={img.url}
          alt={img.alt}
          className={clsxm(
            'w-full h-auto rounded-[10px] object-contain',
            imgClassName
          )}
        />
      </div>
    )}

    <div
      className={clsxm(
        'w-full flex flex-col',
        !reverse ? 'order-1' : '-order-1',
        textClassName
      )}
    >
      <MarkdownText
        className={clsxm('text-body2 font-primary', markTextClassName)}
        components={{
          h3: ({ children }) => <h2 className='h3 mb-6 lg:mb-8'>{children}</h2>,
          h4: ({ children }) => (
            <h4 className='font-bold mb-6 lg:mb-8'>{children}</h4>
          ),
        }}
      >
        {text}
      </MarkdownText>
    </div>
  </section>
);

export const TribuSection = ({ data }: Props) => {
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  const { prefixImg } = useTheme();
  return (
    <Box className='tl sm:px2-fluid lg:px-fluid mb-10 md:mb-14 lg:mb-16 xl:mb-20 !pt-0 !pb-0 md:py-fluid xl:!pt-0'>
      <Section
        text={data.team.text}
        img={{
          url: data.team.image,
          alt: "l'équipe de Atipy",
        }}
        textClassName='md:justify-center'
        reverse
      />
      <Section
        text={data.particularity}
        img={{
          url: `/imgs/tribu/particularite-${prefixImg}-tribu.webp`,
          alt: 'la particularité',
        }}
        textClassName='md:justify-center'
        imgClassName='!w-auto !h-full max-h-[288px]'
        reverse={matchSM}
      />
      <Section text={data.philosophy} markTextClassName='mb-4 lg:mb-6' />

      <section className='tl sm:px-fluid w-full mb-10 md:mb-14 lg:mb-16 xl:mb-24'>
        <h2 className='h3 mb-6 lg:mb-8'>Nos membres</h2>

        <div className='flex justify-center items-center'>
          <TeamList data={data.members} />
        </div>
      </section>
    </Box>
  );
};
