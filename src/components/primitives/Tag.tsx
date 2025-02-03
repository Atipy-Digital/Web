'use client';

import React, { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import { type TagType } from '@/ts';

export type Props = TagType & {
  className?: string;
};

export const Tag = ({ color, label, className }: Props) => {
  const getColorStyle = useMemo(() => {
    switch (color) {
      case 'a-blue': {
        return 'border-a-blue-dark bg-a-blue-dark text-white dark:border-a-blue-light dark:bg-a-blue-light dark:text-black select-none';
      }
      case 'a-red': {
        return 'border-a-red-dark bg-a-red-dark text-white dark:border-a-red-light dark:bg-a-red-light dark:text-black select-none';
      }
      case 'a-green': {
        return 'border-a-green-dark bg-a-green-dark text-white dark:border-a-green-light dark:bg-a-green-light dark:text-black select-none';
      }
      case 'a-yellow': {
        return 'border-a-yellow-dark bg-a-yellow-dark text-black dark:border-a-yellow-light dark:bg-a-yellow-light dark:text-black select-none';
      }
      default: {
        return 'border-black bg-background text-white dark:border-white dark:bg-white dark:text-black select-none';
      }
    }
  }, [color]);

  return (
    <div
      className={clsxm(
        'cursor-pointer',
        'tl flex items-center justify-center border-2',
        'rounded-full px-3 py-[5px] text-[16px] md:text-[20px] font-bold',
        getColorStyle,
        className
      )}
    >
      <span className='flex-shrink-0 leading-none font-primary'>{label}</span>
    </div>
  );
};
