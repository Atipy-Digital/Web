'use client';

import { useRouter } from 'next/navigation';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';
import { MarkdownText } from '@/components/primitives/MarkdownText';
import { ProjectList } from '@/components/primitives/ProjectList';

import type { HomeProjectDataType } from '@/ts';

type Props = {
  data: HomeProjectDataType;
};

export const Projects = ({ data }: Props) => {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push('/realisations');
  };
  return (
    <Box as='section' className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <div className='tl sm:px-fluid md:py-fluid relative w-full'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-8 xl:gap-12'>
          <h3 className='flex-shrink-0'>{data.title}</h3>
          <div className='w-full text-body1 leading-snug font-secondary lg:max-w-[799px] flex-grow'>
            <MarkdownText>{data.body}</MarkdownText>
          </div>
        </div>

        <div className='py-8 lg:py-10 xl:py-14 2xl:py-16 flex items-center justify-center'>
          <ProjectList data={data.home_projects} />
        </div>

        <div className='w-full flex items-center justify-center'>
          <Button icon onClick={navigateToProjects}>
            {data.buttonCta.label}
          </Button>
        </div>
      </div>
    </Box>
  );
};
