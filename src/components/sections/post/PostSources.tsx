'use client';

import { Box } from '@/components/common/Box';

import type { PostSourceLinkType, PostType } from '@/ts';

type Props = Pick<PostType, 'source'>;

const Link = ({ url, label }: PostSourceLinkType) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    className='underline leading-none font-bold text-body2'
  >
    {label}
  </a>
);

export const PostSources = ({ source }: Props) => {
  if (!source?.col1?.length && !source?.col2?.length && !source?.col3?.length) {
    return null;
  }

  return (
    <Box className='max-w-5xl px-0 md:px-fluid mb-10'>
      <p className='text-body1 py-8 lg:py-12 border-t-2 border-t-current'>
        Sources
      </p>
      <div className='flex flex-col md:flex-row gap-3 lg:gap-10'>
        {!!source?.col1?.length && (
          <div className='w-full'>
            {source.col1.map((link) => {
              if (link?.url && link?.label) {
                return <Link {...link} key={`post-source-link-${link.url}`} />;
              }

              return null;
            })}
          </div>
        )}
        {!!source?.col2?.length && (
          <div className='w-full'>
            {source.col2.map((link) => {
              if (link?.url && link?.label) {
                return <Link {...link} key={`post-source-link-${link.url}`} />;
              }

              return null;
            })}
          </div>
        )}
        {!!source?.col3?.length && (
          <div className='w-full'>
            {source.col3.map((link) => {
              if (link?.url && link?.label) {
                return <Link {...link} key={`post-source-link-${link.url}`} />;
              }

              return null;
            })}
          </div>
        )}
      </div>
    </Box>
  );
};
