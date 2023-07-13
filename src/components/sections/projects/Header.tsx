'use client';

import ReactMarkdown from 'react-markdown';

import { Box } from '@/components/common/Box';
import { Breadcrumb } from '@/components/common/Breadcrumb';

type Props = {
  title: string;
  intro: string;
};

export const ProjectsHeader = ({ title, intro }: Props) => {
  return (
    <Box className='tl mb-0 md:mb-10 lg:mb-11 xl:mb-16'>
      <div className='tl px-0 pt-8 pb-10 md:px-fluid md:py-fluid relative w-full'>
        <Breadcrumb
          currentLink={{ label: 'Nos réalisations', url: '/realisations' }}
        />

        <h1 className='h2-primary w-full text-center mt-4'>{title}</h1>

        <h2 className='h2-intro text-center pt-6 md:pt-8 lg:pt-10'>
          <ReactMarkdown
            components={{
              em: 'span',
            }}
          >
            {intro}
          </ReactMarkdown>
        </h2>
      </div>
    </Box>
  );
};
