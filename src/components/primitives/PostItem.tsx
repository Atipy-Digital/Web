'use client';

import Link from 'next/link';

//import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';
import { MarkdownText } from './MarkdownText';
import { Tag } from './Tag';

import type { PostType } from '@/ts';

export const PostItem = ({ title, tags, timeToRead, slug }: PostType) => {
  // const matchSM = useMediaQuery(MEDIA_QUERY.SM);

  return (
    <li className='link-hover-sub-text w-full py-11'>
      <Link href={`/posts/${slug}`} className='block w-full cursor-pointer'>
        <div className='flex items-center justify-between flex-wrap mb-4 gap-y-2'>
          <div className='flex-grow flex items-center gap-2 lg:gap-3 flex-wrap'>
            {tags.map((tag) => (
              <Tag
                key={`post-tag-${tag.type}-${tag.label}`}
                {...tag}
              />
            ))}
          </div>

          <div className='flex-shrink-0 flex items-center gap-x-2'>
            <span className='text-body1'>Temps de lecture : {timeToRead}</span>
          </div>
        </div>

        <MarkdownText className='!font-primary text-to-hover !h4 !w-fit'>
          {title}
        </MarkdownText>
      </Link>
    </li>
  );
};
