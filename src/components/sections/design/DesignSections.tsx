'use client';

import { nanoid } from 'nanoid';

import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';
import { SubPageCard } from '@/components/primitives/SubPageCard';

import { CARD_TYPE, type ExpertiseDesignType } from '@/ts';

type Props = {
  data: Omit<ExpertiseDesignType, 'title'>;
};

export const DesignSections = ({ data }: Props) => {
  const { prefixImg } = useTheme();
  return (
    <Box className='tl sm:px2-fluid lg:px-fluid  mb-10 md:mb-14 lg:mb-16 xl:mb-20'>
      <div className='px-0 sm:px2-fluid lg:px-fluid md:pt-12'>
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
                url: `/imgs/design/intro-${prefixImg}.webp`,
                className: 'max-w-[509px] object-contain',
                altText:
                  'Pictogramme représentant un ordinateur avec un personnage tenant un crayon. Dans le fond, il y a une photo d’oreille',
                isAriaHidden: true,
              },
            }}
            inverseCol
            pClassName='!mb-0'
          />
        </div>

        {data.sections?.map((section) => (
          <MarkdownSection
            {...section}
            key={`design-page-section-${nanoid(7)}`}
            // ici, impossible d'ajouter la props "isAriaHidden"
          />
        ))}

        <div className='mt-10 md:mt-16 lg:mt-20 xl:mt-24'>
          <h4 className='text-a-green-dark dark:text-a-green-light mb-10 font-primary font-bold'>
            Nos expertises
          </h4>

          <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12'>
            {data.expertises.map((xp) => {
              return (
                <SubPageCard
                  icon={xp.icon}
                  path={`/expertises/design/${xp.slug}`}
                  title={xp.title}
                  type={xp.color}
                  key={`sub-page-design-${xp.slug}`}
                  isAriaHidden={true}
                />
              );
            })}
            <SubPageCard
              icon={{
                type: 'design',
                value: 'formation',
              }}
              path='/expertises/formation'
              title='Formations et ateliers'
              type={CARD_TYPE.DESIGN}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
