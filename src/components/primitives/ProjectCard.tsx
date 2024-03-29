'use client';

import { useRouter } from 'next/navigation';

import { Tag } from './Tag';

import type { ProjectType } from '@/ts';

type Props = ProjectType;

export const ProjectCard = ({ slug, title, image, tags, client }: Props) => {
  const router = useRouter();

  return (
    <article
      className='cursor-pointer w-full h-full rounded-[10px] p-4 flex flex-col bg-white shadow-project-card dark:bg-background dark:border-2 dark:border-white dark:shadow-none max-w-[450px] m-auto'
      onClick={() => router.push(`/realisations/${slug}`)}
    >
      <figure className='relative block w-full aspect-video rounded-[10px] overflow-hidden'>
        <img
          src={image.url}
          alt={image?.alt || `illustration projet ${title}`}
          className='absolute w-full h-full object-cover'
        />
      </figure>
      <main className='pt-4 pb-2'>
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
      </main>
      <footer className='mt-auto'>
        <p className='underline sm:no-underline text-body1 link-hover-small w-fit'>
          Lire la suite
        </p>
      </footer>
    </article>
  );
};
