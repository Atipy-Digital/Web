'use client';

import { nanoid } from 'nanoid';

import { Box } from '@/components/common/Box';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import type { PostType } from '@/ts';

type Props = Pick<PostType, 'sections'>;

export const PostSections = ({ sections }: Props) => {
  if (!sections.length) return null;

  return (
    <Box className='max-w-5xl'>
      <div className='px-0 md:px-fluid pt-8 lg:pt-12'>
        {sections.map((section) => (
          <MarkdownSection
            {...section}
            key={`post-section-${nanoid(7)}`}
            smallGap
          />
        ))}
      </div>
    </Box>
  );
};
