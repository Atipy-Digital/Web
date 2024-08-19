'use client';

import React, { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import { type TagType } from '@/ts';

export type Props = TagType & {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  role?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent) => void;
};

export const Tag = ({
  color,
  label,
  className,
  onClick,
  isActive = false,
  role,
  tabIndex,
  onKeyDown,
}: Props) => {
  const getColorStyle = useMemo(() => {
    switch (color) {
      case 'a-blue': {
        if (onClick) {
          if (isActive) {
            return 'border-a-blue-dark bg-a-blue-dark text-white dark:border-a-blue-light dark:bg-a-blue-light dark:text-black';
          }
          return 'border-grey-140 hover:dark:!border-a-blue-dark dark:border-white text-grey-110 dark:text-white hover:border-a-blue-dark hover:bg-a-blue-dark hover:text-white';
        }
        return 'border-a-blue-dark bg-a-blue-dark text-white dark:border-a-blue-light dark:bg-a-blue-light dark:text-black select-none';
      }
      case 'a-red': {
        if (onClick) {
          if (isActive) {
            return 'border-a-red-dark bg-a-red-dark text-white dark:border-a-red-light dark:bg-a-red-light dark:text-black';
          }
          return 'border-grey-140 hover:dark:!border-a-red-dark dark:border-white text-grey-110 dark:text-white hover:border-a-red-dark hover:bg-a-red-dark hover:text-white dark:text-white dark:border-white';
        }
        return 'border-a-red-dark bg-a-red-dark text-white dark:border-a-red-light dark:bg-a-red-light dark:text-black select-none';
      }
      case 'a-green': {
        if (onClick) {
          if (isActive) {
            return 'border-a-green-dark bg-a-green-dark text-white dark:border-a-green-light dark:bg-a-green-light dark:text-black';
          }
          return 'border-grey-140 hover:dark:!border-a-green-dark dark:border-white text-grey-110 dark:text-white hover:border-a-green-dark hover:bg-a-green-dark hover:text-white';
        }
        return 'border-a-green-dark bg-a-green-dark text-white dark:border-a-green-light dark:bg-a-green-light dark:text-black select-none';
      }
      case 'a-yellow': {
        if (onClick) {
          if (isActive) {
            return 'border-a-yellow-dark bg-a-yellow-dark text-black dark:border-a-yellow-light dark:bg-a-yellow-light dark:text-black';
          }
          return 'border-grey-140 hover:dark:!border-a-yellow-dark dark:border-white text-grey-110 dark:text-black hover:border-a-yellow-dark hover:bg-a-yellow-dark hover:text-black';
        }
        return 'border-a-yellow-dark bg-a-yellow-dark text-black dark:border-a-yellow-light dark:bg-a-yellow-light dark:text-black select-none';
      }

      default: {
        if (onClick) {
          if (isActive) {
            return 'border-black bg-background text-white dark:border-white dark:bg-white dark:text-black';
          }
          return 'border-grey-140 hover:dark:!border-white dark:border-white text-grey-110 dark:text-white hover:border-black hover:bg-background hover:text-white hover:dark:bg-white hover:dark:text-black';
        }
        return 'border-black bg-background text-white dark:border-white dark:bg-white dark:text-black select-none';
      }
    }
  }, [color, onClick, isActive]);

  return (
    <div
      className={clsxm(
        onClick && 'cursor-pointer',
        'tl flex items-center justify-center border-2',
        'rounded-full px-3 py-[5px] text-[16px] md:text-[20px] font-bold',
        getColorStyle,
        className
      )}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
    >
      <span className='flex-shrink-0 leading-none font-primary'>{label}</span>
    </div>
  );
};
