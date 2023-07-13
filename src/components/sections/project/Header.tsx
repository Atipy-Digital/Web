'use client';

import { Box } from '@/components/common/Box';
import { Breadcrumb } from '@/components/common/Breadcrumb';

type Props = {
  slug: string;
  title: string;
};

export const ProjectHeader = ({ slug, title }: Props) => {
  return (
    <Box className='tl mb-0 md:mb-10 lg:mb-11 xl:mb-16'>
      <div className='tl px-0 pt-5 pb-10 md:px-fluid md:py-fluid relative w-full'>
        <Breadcrumb
          links={[{ label: 'Nos réalisations', url: '/realisations' }]}
          currentLink={{
            label: title,
            url: `/realisations/${slug}`,
          }}
        />

        <h2 className='h2-primary w-full text-center mt-4'>{title}</h2>
      </div>
    </Box>
  );
};
