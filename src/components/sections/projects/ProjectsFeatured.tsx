'use client';

import { Box } from '@/components/common/Box';

import { ProjectList } from '../../primitives/ProjectList';

import { ProjectType } from '@/ts';

type Props = {
  data: ProjectType[];
};

export const ProjectsFeatured = ({ data }: Props) => {
  return (
    <section className='w-full bg-grey-100 dark:bg-black tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <Box className='tl px-fluid !py-10 relative w-full'>
        <h3 className='h4 mb-8 w-full text-center font-bold'>
          Projets à la une…
        </h3>
        <ProjectList data={data} />
      </Box>
    </section>
  );
};
