'use client';

import { nanoid } from 'nanoid';

import { Box } from '@/components/common/Box';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import type { ConceptionDataType } from '@/ts';

type Props = Pick<ConceptionDataType, 'sections'>;

export const Sections = ({ sections }: Props) => {
  if (!sections.length) return null;

  return (
    <Box className='tl mb-10 md:mb-14 lg:mb-16 xl:mb-20'>
      <div className='px-0 md:px-fluid pt-8 lg:pt-12'>
        {sections.map((section) => (
          <MarkdownSection {...section} key={`post-section-${nanoid(7)}`} />
        ))}
      </div>
    </Box>
  );
};