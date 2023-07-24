import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import clsxm from '@/lib/clsxm';

import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

interface Props
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
  > {
  variant?: 'primary' | 'secondary' | 'blue' | 'red' | 'green' | 'yellow';
  icon?: boolean;
  noAnim?: boolean;
}

export const Button = ({
  variant = 'primary',
  icon = false,
  className,
  noAnim = false,
  children,
  ...props
}: Props) => {
  const variants = new Map<Props['variant'], string>([
    [
      'primary',
      'text-white bg-background border-3 border-black hover:bg-white hover:text-black dark:text-black dark:bg-white hover:dark:bg-background hover:dark:border-white hover:dark:text-white',
    ],
    [
      'secondary',
      'text-black border-3 border-black bg-white dark:text-white dark:bg-background dark:border-white hover:text-white hover:bg-background hover:dark:text-black hover:dark:bg-white',
    ],
    [
      'blue',
      'text-white border-3 border-a-blue-dark bg-a-blue-dark dark:text-black dark:border-a-blue-light dark:bg-a-blue-light hover:text-black hover:bg-white hover:dark:text-a-blue-light hover:dark:bg-background',
    ],
    [
      'red',
      'text-white border-3 border-a-red-dark bg-a-red-dark dark:text-black dark:border-a-red-light dark:bg-a-red-light hover:text-black hover:bg-white hover:dark:text-a-red-light hover:dark:bg-background',
    ],
    [
      'green',
      'text-white border-3 border-a-green-dark bg-a-green-dark dark:text-black dark:border-a-green-light dark:bg-a-green-light hover:text-black hover:bg-white hover:dark:text-a-green-light hover:dark:bg-background',
    ],
    [
      'yellow',
      'text-white border-3 border-a-yellow-dark bg-a-yellow-dark dark:text-black dark:border-a-yellow-light dark:bg-a-yellow-light hover:text-black hover:bg-white hover:dark:text-a-yellow-light hover:dark:bg-background',
    ],
  ]);

  const currentVariant = variants.get(variant);

  return (
    <motion.button
      {...props}
      className={clsxm(
        'h-[54px] flex-shrink-0 flex items-center rounded-full px-[14px] py-[11px] text-[16px] md:text-[18px] lg:text-[20px] leading-none font-bold w-fit',
        'disabled:cursor-not-allowed disabled:bg-grey-110 disabled:border-grey-110 disabled:text-white dark:disabled:bg-grey-110 dark:disabled:border-grey-110 dark:disabled:text-white',
        currentVariant,
        className
      )}
      whileHover={noAnim || !!props?.disabled ? {} : { scale: 1.05 }}
      whileTap={noAnim || !!props?.disabled ? {} : { scale: 0.9 }}
    >
      {icon && (
        <AtipyIcon
          type={ATIPY_ICON.ARROW_LEFT}
          size='lg'
          className='mr-5 flex-shrink-0'
        />
      )}
      <span className='text-center lg:flex-shrink-0'>{children}</span>
    </motion.button>
  );
};
