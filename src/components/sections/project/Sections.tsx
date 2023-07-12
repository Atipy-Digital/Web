'use client';

import { nanoid } from 'nanoid';

import { Box } from '@/components/common/Box';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import { ProjectType } from '@/ts';

type Props = {
  data: ProjectType['project_sections'];
};

export const ProjectSections = ({ data }: Props) => {
  if (!data.length) return null;

  return (
    <Box className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <div className='tl px-0 md:px-fluid relative w-full'>
        {data.map((data) => (
          <MarkdownSection key={`project-section-${nanoid(7)}`} {...data} />
        ))}
      </div>
    </Box>
  );
};
