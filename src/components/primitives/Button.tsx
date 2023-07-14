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
  variant?: 'primary' | 'secondary';
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
      'text-white bg-black border-3 border-black hover:bg-white hover:text-black dark:text-black dark:bg-white hover:dark:bg-black hover:dark:border-white hover:dark:text-white',
    ],
    [
      'secondary',
      'text-black border-3 border-black bg-white dark:text-white dark:bg-black dark:border-white hover:text-white hover:bg-black hover:dark:text-black hover:dark:bg-white',
    ],
  ]);

  const currentVariant = variants.get(variant);

  return (
    <motion.button
      {...props}
      className={clsxm(
        'h-[54px] flex-shrink-0 flex items-center rounded-full px-[14px] py-[11px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] leading-none font-bold w-fit',
        'disabled:cursor-not-allowed disabled:bg-grey-110 disabled:border-grey-110 disabled:text-black dark:disabled:bg-grey-110 dark:disabled:border-grey-110 dark:disabled:text-black',
        currentVariant,
        className
      )}
      whileHover={noAnim ? {} : { scale: 1.05 }}
      whileTap={noAnim ? {} : { scale: 0.9 }}
    >
      {icon && (
        <AtipyIcon
          type={ATIPY_ICON.ARROW_LEFT}
          size='lg'
          className='mr-5 flex-shrink-0'
        />
      )}
      <span className='flex-shrink-0'>{children}</span>
    </motion.button>
  );
};
