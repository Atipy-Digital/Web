'use client';

import { Box } from '@/components/common/Box';
import { AtipyImage } from '@/components/common/icons/AtipyImage';
import { MarkdownText } from '@/components/primitives/MarkdownText';
import { Tag } from '@/components/primitives/Tag';

import { ProjectType } from '@/ts';

type Props = Pick<
  ProjectType,
  'image' | 'mission_body' | 'context_body' | 'client' | 'tags'
>;

export const ProjectIntro = ({
  image,
  mission_body,
  context_body,
  client,
  tags,
}: Props) => {
  return (
    <Box as='section' className='sm:px2-fluid lg:px-fluid'>
      <div className='tl px-0 sm:px2-fluid lg:px-fluid relative w-full'>
        <div className='w-full'>
          <AtipyImage
            isDecorative
            src={image.url}
            className='w-full h-auto object-cover object-center rounded-[10px]'
          />
        </div>

        {!!tags.length && (
          <div className='tl w-full flex items-center flex-wrap gap-2 md:gap-6 my-7 lg:mt-8 lg:mb-24'>
            {tags.map((tag) => (
              <Tag key={`project-tag-${tag.label}`} {...tag} />
            ))}
          </div>
        )}

        <div className='w-full flex flex-col-reverse md:flex-row md:justify-between md:gap-x-4'>
          <div className='md:max-w-[940px] xl:max-w-[848px]'>
            <h2 className='mb-4'>La mission</h2>
            <MarkdownText className='text-body2'>{mission_body}</MarkdownText>
            <h2 className='mb-4 mt-12 md:mt-16 lg:mt-20 xl:mt-24'>
              Le contexte
            </h2>
            <MarkdownText className='text-body2 mb-4'>
              {context_body}
            </MarkdownText>
          </div>

          {client?.logo && (
            <div className='max-w-[128px] md:max-w-[168px] lg:max-w-[205px] w-full mb-10 md:mb-0'>
              <AtipyImage isDecorative src={client.logo} />
            </div>
          )}
        </div>

        <div className='w-full h-[2px] rounded-full bg-background dark:bg-white my-10 lg:my-16 xl:my-24' />
      </div>
    </Box>
  );
};
