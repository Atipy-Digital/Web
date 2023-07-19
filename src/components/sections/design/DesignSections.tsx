'use client';

import { nanoid } from 'nanoid';

import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import type { ExpertiseDesignType } from '@/ts';

type Props = {
  data: Omit<ExpertiseDesignType, 'title'>;
};

export const DesignSections = ({ data }: Props) => {
  const { prefixImg } = useTheme();
  return (
    <Box className='tl mb-10 md:mb-14 lg:mb-16 xl:mb-20'>
      <div className='px-0 md:px-fluid pt-8 lg:pt-12'>
        <div className='mb-10 md:mb-16 lg:mb-20 xl:mb-24'>
          <MarkdownSection
            col1={{
              reverseMobile: false,
              text: {
                content: data.intro,
              },
            }}
            col2={{
              reverseMobile: false,
              image: {
                url: `/imgs/design/intro-${prefixImg}-design.webp`,
                className: 'max-w-[509px]',
              },
            }}
          />
        </div>

        {data.sections?.map((section) => (
          <MarkdownSection
            {...section}
            key={`design-page-section-${nanoid(7)}`}
          />
        ))}
      </div>
    </Box>
  );
};
