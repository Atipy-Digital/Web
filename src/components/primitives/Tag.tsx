import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import { type TagType } from '@/ts';

export type Props = TagType & { className?: string; onClick?: () => void };

export const Tag = ({ color, label, className, onClick }: Props) => {
  const getColorStyle = useMemo(() => {
    switch (color) {
      case 'a-blue': {
        if (onClick) {
          return 'border-grey-140 text-grey-110 hover:bg-a-blue-dark hover:text-white';
        }
        return 'border-a-blue-dark bg-a-blue-dark text-white';
      }
      case 'a-red': {
        if (onClick) {
          return 'border-grey-140 text-grey-110 hover:bg-a-red-dark hover:text-white';
        }
        return 'border-a-red-dark bg-a-red-dark text-white';
      }
      case 'a-green': {
        if (onClick) {
          return 'border-grey-140 text-grey-110 hover:bg-a-green-dark hover:text-white';
        }
        return 'border-a-green-dark bg-a-green-dark text-white';
      }
      case 'a-yellow': {
        if (onClick) {
          return 'border-grey-140 text-grey-110 hover:bg-a-yellow-dark hover:text-white';
        }
        return 'border-a-yellow-dark bg-a-yellow-dark text-white';
      }

      default: {
        if (onClick) {
          return 'border-grey-140 text-grey-110 hover:bg-black hover:text-white';
        }
        return 'border-black bg-black text-white';
      }
    }
  }, [color, onClick]);

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
    >
      <span className='flex-shrink-0 leading-none font-primary'>{label}</span>
    </div>
  );
};
