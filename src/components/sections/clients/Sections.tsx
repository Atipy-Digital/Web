'use client';

import { nanoid } from 'nanoid';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import type { ClientPageDataType } from '@/ts';

type Props = Pick<ClientPageDataType, 'sections'>;

export const Sections = ({ sections }: Props) => {
  const matchesSM = useMediaQuery(MEDIA_QUERY.SM);
  if (!sections.length) return null;

  return (
    <Box className='tl mb-10 md:mb-14 lg:mb-16 xl:mb-20 max-w-6xl'>
      <div className='px-0 md:px-fluid pt-8 [&_h3]:text-[20px] sm:[&_h3]:text-body1 text-center sm:text-left'>
        {sections.map((section) => (
          <MarkdownSection
            {...section}
            key={`client-section-${nanoid(7)}`}
            smallGap
            pClassName='not-prose !mb-0'
          />
        ))}
      </div>

      <div className='my-10 flex flex-col items-center justify-center md:mt-14 lg:mt-20 xl:mt-24'>
        <h3 className='max-w-[634px] text-center'>
          Une question ? Un projet ? Contactez-nous
        </h3>
        <div className='flex items-center gap-x-2 md:gap-x-6 pt-7'>
          <AtipyIcon type={ATIPY_ICON.ENVELOP} size={matchesSM ? 'md' : 'xl'} />
          <a
            href='mailto:contact@atipy.fr'
            className='text-body1 font-secondary'
          >
            contact@atipy.fr
          </a>
        </div>
      </div>
    </Box>
  );
};
