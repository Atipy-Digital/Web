import { XIcon } from '@heroicons/react/solid';
import React from 'react';

import { useAppStore } from '@/store/use-app-store';

import type { ITagBusiness, ITagExpertise } from '@/ts';

type DisplayActiveTagsProps = {
  activeBusinessTags: ITagBusiness[];
  activeExpertiseTags: ITagExpertise[];
  handleResetTags: () => void;
};

const DisplayActiveTags = ({
  activeBusinessTags,
  activeExpertiseTags,
  handleResetTags,
}: DisplayActiveTagsProps) => {
  const removeTagBusiness = useAppStore((s) => s.removeTagBusiness);
  const removeTagExpertise = useAppStore((s) => s.removeTagExpertise);

  return (
    <div className='flex flex-wrap justify-start gap-2 mt-2 mb-4'>
      <div className='flex flex-wrap gap-2 mb-2'>
        {activeBusinessTags.map((tag) => (
          <button
            key={tag.label}
            onClick={() => {
              removeTagBusiness(tag);
            }}
            className='flex items-center whitespace-nowrap bg-gray-200 text-gray-800 border border-gray-400 px-3 py-1 rounded-full cursor-pointer'
            aria-label={`Remove ${tag.label}`}
          >
            <span className='mr-2 whitespace-nowrap'>{tag.label}</span>
            <XIcon className='w-5 h-5 text-gray-900' aria-hidden={true} />
          </button>
        ))}
        {activeExpertiseTags.map((tag) => (
          <button
            key={tag.label}
            onClick={() => {
              removeTagExpertise(tag);
            }}
            className='flex items-center whitespace-nowrap bg-gray-200 text-gray-800 border border-gray-400 px-3 py-1 rounded-full cursor-pointer'
            aria-label={`Remove ${tag.label}`}
          >
            <span className='mr-2 whitespace-nowrap'>{tag.label}</span>
            <XIcon className='w-5 h-5 text-gray-900' aria-hidden={true} />
          </button>
        ))}
      </div>
      <button
        className='ml-auto px-3 py-1 mb-2 cursor-pointer'
        onClick={handleResetTags}
      >
        Effacer les filtres
      </button>
    </div>
  );
};

export default DisplayActiveTags;
