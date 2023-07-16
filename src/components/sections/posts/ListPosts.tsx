'use client';

import { Box } from '@/components/common/Box';
import { PostItem } from '@/components/primitives/PostItem';

import type { PostType } from '@/ts';

type Props = {
  data: PostType[];
};

export const ListPosts = ({ data }: Props) => {
  if (!data.length) return null;
  return (
    <Box as='section' className='max-w-4xl'>
      <ul className='list-border-b flex flex-col'>
        {data.map((post) => (
          <PostItem {...post} key={`post-item-${post.slug}`} />
        ))}
      </ul>
    </Box>
  );
};
