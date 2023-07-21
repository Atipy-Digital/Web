'use client';

import { memo, useCallback } from 'react';

import clsxm from '@/lib/clsxm';

import { ProjectCard } from '@/components/primitives/ProjectCard';

import { ProjectType } from '@/ts';

const ProjectListTemp = ({ data }: { data: ProjectType[] }) => {
  const maxCols = useCallback(() => {
    if (data.length <= 1) return 'lg:grid-cols-1 w-full';
    if (data.length === 2) return 'md:grid-cols-2 lg:grid-cols-2';
    if (data.length >= 3) return 'md:grid-cols-2 lg:grid-cols-3';
  }, [data]);

  return (
    <div
      className={clsxm(
        'grid grid-cols-1 gap-6 md:gap-8 lg:gap-10 m-auto',
        maxCols()
      )}
    >
      {data.map((project) => (
        <ProjectCard key={`p-f-${project.slug}`} {...project} />
      ))}
    </div>
  );
};

export const ProjectList = memo(ProjectListTemp);
