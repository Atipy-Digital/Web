'use client';

import { Box } from '@/components/common/Box';
import { PostItem } from '@/components/primitives/PostItem';

import type { PostType } from '@/ts';

type Props = {
  data: PostType[];
};

export const LastPosts = ({ data }: Props) => {
  if (!data.length) return null;

  return (
    <Box as='section' className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <div className='tl sm:px-fluid py-fluid !pb-0 relative w-full flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10'>
        <h3 className='w-full tl mb-8 lg:mb-10 xl:mb-12 max-w-sm'>
          Nos dernières publications
        </h3>
        <ul className='list-border flex flex-col w-full'>
          {data.map((post) => (
            <PostItem {...post} key={`home-post-item-${post.slug}`} />
          ))}
        </ul>
      </div>
    </Box>
  );
};
