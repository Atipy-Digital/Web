'use client';

import { nanoid } from 'nanoid';

import { Box } from '@/components/common/Box';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import type { ProjectType } from '@/ts';

type Props = {
  data: ProjectType['project_sections'];
};

export const ProjectSections = ({ data }: Props) => {
  if (!data?.length) return null;

  return (
    <Box className='tl sm:px2-fluid lg:px-fluid mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <div className='tl px-0 sm:px2-fluid lg:px-fluid relative w-full'>
        {data?.map((data) => (
          <MarkdownSection key={`project-section-${nanoid(7)}`} {...data} />
        ))}
      </div>
    </Box>
  );
};
