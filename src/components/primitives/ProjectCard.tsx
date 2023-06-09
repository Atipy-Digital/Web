import Link from 'next/link';

import { Tag } from './Tag';

import { ProjectType } from '@/ts';

type Props = ProjectType;

export const ProjectCard = ({ slug, title, image, tags, client }: Props) => {
  return (
    <article className='col-span-1 flex-grow w-full rounded-[10px] p-4 flex flex-col bg-white shadow-project-card dark:bg-black dark:border-2 dark:border-white dark:shadow-none'>
      <figure className='relative block w-full aspect-video rounded-[10px] overflow-hidden'>
        <img
          src={image}
          alt={`illustration projet ${title}`}
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

        <p className='text-body1 font-bold leading-none line-clamp-1'>
          {title}
        </p>
        <p className='text-body1'>{client.name}</p>
      </main>
      <footer>
        <Link
          href={`/realisations/${slug}`}
          className='text-body1 link-hover-small'
        >
          Lire la suite
        </Link>
      </footer>
    </article>
  );
};
