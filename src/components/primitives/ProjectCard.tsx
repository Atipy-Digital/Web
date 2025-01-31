'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { AtipyImage } from '@/components/common/icons/AtipyImage';

import { Tag } from './Tag';

import type { ProjectType } from '@/ts';

type Props = ProjectType;

export const ProjectCard = ({ slug, title, image, tags, client }: Props) => {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      router.push(`/realisations/${slug}`);
    }
  };

  return (
    <div
      className='cursor-pointer w-full h-full rounded-[10px] p-4 flex flex-col bg-white shadow-project-card dark:bg-background dark:border-2 dark:border-white dark:shadow-none max-w-[450px] m-auto'
      onClick={() => router.push(`/realisations/${slug}`)}
      role='button'
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <figure className='relative block w-full aspect-video rounded-[10px] overflow-hidden'>
        <AtipyImage
          isDecorative
          src={image.url}
          className='absolute w-full h-full object-cover'
        />
      </figure>
      <div className='pt-4 pb-2'>
        <div className='w-full flex items-center gap-3 pb-3 flex-wrap'>
          {tags.map((tag) => (
            <Tag
              key={`t-project-featured-${tag.label}`}
              {...tag}
              className='px-2 py-1 !text-[15px]'
            />
          ))}
        </div>

        <div className='line-clamp-1'>
          <p className='text-body1 font-bold'>{title}</p>
        </div>
        <p className='text-body1'>{client.name}</p>
      </div>
      <footer className='mt-auto'>
        <p className='underline sm:no-underline text-body1 link-hover-small w-fit'>
          Lire la suite
        </p>
      </footer>
    </div>
  );
};
