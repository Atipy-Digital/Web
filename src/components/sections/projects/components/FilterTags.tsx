'use client';

import { motion } from 'framer-motion';
import { memo } from 'react';

import clsxm from '@/lib/clsxm';
import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { Tag } from '@/components/primitives/Tag';

import { useAppStore } from '@/store/use-app-store';

import type { ITagBusiness, ITagExpertise } from '@/ts';

type Props = {
  hasTagsExpertiseActive: boolean;
  hasTagsBusinessActive: boolean;
  expertiseTags: ITagExpertise[];
  businessTags: ITagBusiness[];
  setTagBusinessActive: (tag: ITagBusiness) => void;
  setTagExpertiseActive: (tag: ITagExpertise) => void;
  showAll: boolean;
};

const FilterTagsTemp = ({
  hasTagsExpertiseActive,
  hasTagsBusinessActive,
  expertiseTags,
  businessTags,
  setTagExpertiseActive,
  setTagBusinessActive,
  showAll,
}: Props) => {
  const matchesLG = useMediaQuery(MEDIA_QUERY.LG);
  const matchesSM = useMediaQuery(MEDIA_QUERY.SM);
  const onResetTagsBusiness = useAppStore((s) => s.onResetTagsBusiness);
  const onResetTagsExpertise = useAppStore((s) => s.onResetTagsExpertise);

  const getSmallHeight = matchesSM ? 168 : 128;

  return (
    <motion.div
      className='flex flex-col lg:flex-row overflow-hidden'
      initial={{
        height: matchesLG ? getSmallHeight : 64,
      }}
      animate={{
        height: showAll ? '100%' : matchesLG ? getSmallHeight : 64,
      }}
    >
      <div
        className={clsxm(
          'flex flex-col sm:flex-row items-center gap-x-2 md:gap-x-4 2xl:gap-x-6 pt-4 sm:py-4 sm:pr-6 lg:pr-8 xl:pr-10 2xl:pr-14 lg:border-r-[1px] lg:border-r-a-divider',
          !showAll && matchesSM && 'h-[84px] overflow-hidden'
        )}
      >
        <p className='font-bold text-[16px] xl:text-[18px] 2xl:text-[20px] leading-none self-start pb-2 sm:pb-0 pt-2'>
          Expertises
        </p>
        <div className='w-[1px] bg-a-divider self-stretch hidden sm:block' />
        <div className='flex-grow flex items-center flex-wrap gap-y-4 gap-x-2 xl:gap-x-3 self-start'>
          <Tag
            color='default'
            label='Tous'
            type='expertise'
            onClick={onResetTagsExpertise}
            className='py-1 px-2 text-[16px]'
            isActive={hasTagsExpertiseActive}
          />
          {expertiseTags.map((tag) => (
            <Tag
              key={`t-filter-project-${tag.type}-${tag.label}`}
              {...tag}
              onClick={() => {
                setTagExpertiseActive(tag);
              }}
              className='py-1 px-2 text-[16px]'
            />
          ))}
        </div>
      </div>

      <div
        className={clsxm(
          'flex flex-col sm:flex-row items-center gap-x-2 md:gap-x-4 2xl:gap-x-6 py-4 px-0 lg:px-8 xl:px-10 2xl:px-14 lg:border-r-[1px] lg:border-r-a-divider',
          !showAll && matchesSM && 'h-[84px] overflow-hidden'
        )}
      >
        <p className='whitespace-nowrap font-bold text-[16px] xl:text-[18px] 2xl:text-[20px] leading-none self-start pb-2 sm:pb-0 pt-2'>
          Secteurs d’activité
        </p>
        <div className='w-[1px] bg-a-divider self-stretch hidden sm:block' />
        <div className='flex-grow flex items-center flex-wrap gap-y-4 gap-x-2 xl:gap-x-3 self-start'>
          <Tag
            color='default'
            label='Tous'
            type='business'
            onClick={onResetTagsBusiness}
            className='py-1 px-2 text-[16px]'
            isActive={hasTagsBusinessActive}
          />
          {businessTags.map((tag) => (
            <Tag
              key={`t-filter-project-${tag.type}-${tag.label}`}
              {...tag}
              onClick={() => {
                setTagBusinessActive(tag);
              }}
              className='py-1 px-2 text-[16px]'
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const FilterTags = memo(FilterTagsTemp);
