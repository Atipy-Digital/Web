'use client';

import { formatPublicationDate } from '@/lib/helpers';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import { Tag } from '@/components/primitives/Tag';

import type { PostType } from '@/ts';

type Props = Pick<PostType, 'date' | 'tags'>;

export const PostInfo = ({ date, tags }: Props) => {
  return (
    <Box className='max-w-5xl'>
      <div className='flex items-center flex-wrap px-0 md:px-fluid'>
        <div className='flex-grow flex items-center gap-x-2'>
          {tags.map((tag) => (
            <Tag {...tag} key={`post-tag-${tag.type}-${tag.label}`} />
          ))}
        </div>

        <div className='flex-shrink-0 flex items-center gap-3 text-grey-110 dark:text-grey-100'>
          <span className='lg:text-[20px]'>{formatPublicationDate(date)}</span>
          <AtipyIcon
            type={ATIPY_ICON.CLOCK}
            size='lg'
            className='flex-shrink-0'
          />
        </div>
      </div>
    </Box>
  );
};
