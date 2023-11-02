'use client';

import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

export type Props = {
  label: string;
  isActive: boolean;
  onChange: (value: boolean) => void;
  className?: string;
};

export const AudienceTag = ({
  label,
  isActive,
  className,
  onChange,
}: Props) => {
  const toggleActive = () => {
    onChange(!isActive);
  };

  const getColorStyle = useMemo(() => {
    if (label === 'Digital') {
      if (isActive) {
        return 'border-a-blue-dark bg-a-blue-dark text-white dark:border-a-blue-light dark:bg-a-blue-light dark:text-black';
      }
      return 'border-grey-140 hover:dark:!border-a-blue-dark dark:border-white text-grey-110 dark:text-white hover:border-a-blue-dark hover:bg-a-blue-dark hover:text-white';
    } else if (label === 'Ingénierie') {
      if (isActive) {
        return 'border-a-red-dark bg-a-red-dark text-white dark:border-a-red-light dark:bg-a-red-light dark:text-black';
      }
      return 'border-grey-140 hover:dark:!border-a-red-dark dark:border-white text-grey-110 dark:text-white hover:border-a-red-dark hover:bg-a-red-dark hover:text-white dark:text-white dark:border-white';
    } else if (label === 'Design') {
      if (isActive) {
        return 'border-a-green-dark bg-a-green-dark text-white dark:border-a-green-light dark:bg-a-green-light dark:text-black';
      }
      return 'border-grey-140 hover:dark:!border-a-green-dark dark:border-white text-grey-110 dark:text-white hover:border-a-green-dark hover:bg-a-green-dark hover:text-white';
    }
  }, [label, isActive]);
  return (
    <div
      className={clsxm(
        'cursor-pointer',
        'tl flex items-center justify-center border-2',
        'rounded-full px-3 py-[5px] text-[16px] md:text-[20px] font-bold',
        getColorStyle,
        className
      )}
      onClick={toggleActive}
    >
      <p className='cursor-pointer'>{label}</p>
    </div>
  );
};
