'use client';

import { useRouter } from 'next/navigation';

import { Tag } from './Tag';
import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

import type { PostType } from '@/ts';

export const PostItem = ({ title, tags, timeToRead, slug }: PostType) => {
  const router = useRouter();

  return (
    <li
      className='link-hover-sub-text w-full py-11 cursor-pointer'
      onClick={() => router.push(`/posts/${slug}`)}
    >
      <div className='flex items-center justify-between flex-wrap mb-4 gap-y-2'>
        <div className='flex-grow flex items-center gap-2 lg:gap-3 flex-wrap'>
          {tags.map((tag) => (
            <Tag key={`post-tag-${tag.type}-${tag.label}`} {...tag} />
          ))}
        </div>

        <div className='flex-shrink-0 flex items-center gap-x-2'>
          <span className='text-body1'>{timeToRead}</span>
          <AtipyIcon type={ATIPY_ICON.CLOCK} size='lg' />
        </div>
      </div>

      <p className='text-to-hover h4 w-fit'>{title}</p>
    </li>
  );
};