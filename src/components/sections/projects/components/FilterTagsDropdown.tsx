'use client';

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import DisplayActiveTags from '@/components/sections/projects/components/DisplayActiveTags';

import { useAppStore } from '@/store/use-app-store';

import type { ITagBusiness, ITagExpertise } from '@/ts';

type Props = {
  tagsExpertiseActive: ITagExpertise[];
  tagsBusinessActive: ITagBusiness[];
  expertiseTags: ITagExpertise[];
  businessTags: ITagBusiness[];
  setTagBusinessActive: (tag: ITagBusiness) => void;
  setTagExpertiseActive: (tag: ITagExpertise) => void;
  isFilterExpanded: boolean;
};

const FilterTagsTemp = ({
  tagsExpertiseActive,
  tagsBusinessActive,
  expertiseTags,
  businessTags,
  setTagExpertiseActive,
  setTagBusinessActive,
  isFilterExpanded,
}: Props) => {
  const [selectedExpertiseTags, setSelectedExpertiseTags] = useState<string[]>(
    []
  );
  const [selectedBusinessTags, setSelectedBusinessTags] = useState<string[]>(
    []
  );
  const [isExpertiseMenuOpen, setIsExpertiseMenuOpen] =
    useState<boolean>(false);
  const [isBusinessMenuOpen, setIsBusinessMenuOpen] = useState<boolean>(false);

  const expertiseDropdownRef = useRef<HTMLDivElement>(null);
  const businessDropdownRef = useRef<HTMLDivElement>(null);

  const removeTagBusiness = useAppStore((s) => s.removeTagBusiness);
  const removeTagExpertise = useAppStore((s) => s.removeTagExpertise);
  const onResetTags = useAppStore((s) => s.onResetTags);

  const handleExpertiseChange = (tagLabel: string) => {
    const isSelected = selectedExpertiseTags.includes(tagLabel);
    const newSelectedTags = isSelected
      ? selectedExpertiseTags.filter((label) => label !== tagLabel)
      : [...selectedExpertiseTags, tagLabel];

    setSelectedExpertiseTags(newSelectedTags);

    const selectedTag = expertiseTags.find((tag) => tag.label === tagLabel);
    if (selectedTag) {
      if (isSelected) {
        removeTagExpertise(selectedTag);
      } else {
        setTagExpertiseActive(selectedTag);
      }
    }
  };

  const handleBusinessChange = (tagLabel: string) => {
    const isSelected = selectedBusinessTags.includes(tagLabel);
    const newSelectedTags = isSelected
      ? selectedBusinessTags.filter((label) => label !== tagLabel)
      : [...selectedBusinessTags, tagLabel];

    setSelectedBusinessTags(newSelectedTags);

    const selectedTag = businessTags.find((tag) => tag.label === tagLabel);
    if (selectedTag) {
      if (isSelected) {
        removeTagBusiness(selectedTag);
      } else {
        setTagBusinessActive(selectedTag);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, handler: () => void) => {
    if (e.key === 'Enter') {
      handler();
    }
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest('#expertise-menu') &&
        isExpertiseMenuOpen
      ) {
        setIsExpertiseMenuOpen(false);
      }
      if (
        !(event.target as HTMLElement).closest('#business-menu') &&
        isBusinessMenuOpen
      ) {
        setIsBusinessMenuOpen(false);
      }
    },
    [isExpertiseMenuOpen, isBusinessMenuOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setSelectedExpertiseTags(tagsExpertiseActive.map((tag) => tag.label));
    setSelectedBusinessTags(tagsBusinessActive.map((tag) => tag.label));
  }, [tagsExpertiseActive, tagsBusinessActive]);

  const handleResetTags = () => {
    onResetTags();
    setSelectedExpertiseTags([]);
    setSelectedBusinessTags([]);
  };

  const matchesLG = useMediaQuery(MEDIA_QUERY.LG);
  const matchesMD = useMediaQuery(MEDIA_QUERY.MD);
  const getSmallHeight = matchesMD ? 200 : 140;

  return (
    <motion.div
      className='w-full lg:flex-row'
      initial={{
        height: matchesLG ? getSmallHeight : 58,
      }}
      animate={{
        height: isFilterExpanded ? '100%' : matchesLG ? getSmallHeight : 70,
      }}
    >
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-x-2 md:gap-x-4 p-4 md:pr-6 lg:pr-8 xl:pr-10'>
          <p className='font-bold text-[16px] xl:text-[18px] leading-none self-center pb-2 md:pb-0 pt-1'>
            Expertises
          </p>
          <div
            className='relative inline-block text-left'
            id='expertise-menu'
            ref={expertiseDropdownRef}
          >
            <button
              className='inline-flex justify-between w-full rounded-md border border-gray-400 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
              onClick={() => setIsExpertiseMenuOpen(!isExpertiseMenuOpen)}
              aria-haspopup={true}
              aria-expanded={isExpertiseMenuOpen}
            >
              Sélectionner les expertises
              <ChevronDownIcon
                className='ml-2 -mr-1 h-5 w-5'
                aria-hidden='true'
              />
            </button>
            {isExpertiseMenuOpen && (
              <div className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
                <div className='py-1'>
                  {expertiseTags.map((tag) => (
                    <div
                      key={tag.label}
                      className={`${
                        selectedExpertiseTags.includes(tag.label)
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700'
                      } flex items-center justify-between px-4 py-2 text-sm cursor-pointer`}
                      onClick={() => handleExpertiseChange(tag.label)}
                      onKeyDown={(e) =>
                        handleKeyDown(e, () => handleExpertiseChange(tag.label))
                      }
                      role='menuitem'
                      tabIndex={0}
                    >
                      {tag.label}
                      {selectedExpertiseTags.includes(tag.label) && (
                        <CheckIcon
                          className='w-5 h-5 text-gray-900 ml-2'
                          aria-hidden='true'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-x-2 md:gap-x-4 py-4 lg:px-8 xl:px-10'>
          <p className='whitespace-nowrap font-bold text-[16px] xl:text-[18px] leading-none self-center pb-2 md:pb-0 pt-1'>
            Secteurs d’activité
          </p>
          <div
            className='relative inline-block text-left'
            id='business-menu'
            ref={businessDropdownRef}
          >
            <button
              className='inline-flex justify-between w-full rounded-md border border-gray-400 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
              onClick={() => setIsBusinessMenuOpen(!isBusinessMenuOpen)}
              aria-haspopup='true'
              aria-expanded={isBusinessMenuOpen}
            >
              Sélectionner les secteurs d’activité
              <ChevronDownIcon
                className='ml-2 -mr-1 h-5 w-5'
                aria-hidden='true'
              />
            </button>
            {isBusinessMenuOpen && (
              <div className='origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50'>
                <div className='py-1'>
                  {businessTags.map((tag) => (
                    <div
                      key={tag.label}
                      className={`${
                        selectedBusinessTags.includes(tag.label)
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-700'
                      } flex items-center justify-between px-4 py-2 text-sm cursor-pointer`}
                      onClick={() => handleBusinessChange(tag.label)}
                      onKeyDown={(e) =>
                        handleKeyDown(e, () => handleBusinessChange(tag.label))
                      }
                      role='menuitem'
                      tabIndex={0}
                    >
                      {tag.label}
                      {selectedBusinessTags.includes(tag.label) && (
                        <CheckIcon
                          className='w-5 h-5 text-gray-900 ml-2'
                          aria-hidden='true'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isFilterExpanded && (
        <DisplayActiveTags
          activeBusinessTags={tagsBusinessActive}
          activeExpertiseTags={tagsExpertiseActive}
          handleResetTags={handleResetTags}
        />
      )}
    </motion.div>
  );
};

export const FilterTagsDropDown = memo(FilterTagsTemp);
