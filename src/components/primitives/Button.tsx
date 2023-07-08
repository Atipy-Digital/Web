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
}

export const Button = ({
  variant = 'primary',
  icon = false,
  className,
  children,
  ...props
}: Props) => {
  const variants = new Map<Props['variant'], string>([
    ['primary', 'text-white dark:text-black bg-black dark:bg-white'],
    ['secondary', ''],
  ]);

  const currentVariant = variants.get(variant);

  return (
    <motion.button
      {...props}
      className={clsxm(
        'flex-shrink-0 flex items-center rounded-full px-[14px] py-[11px] text-[clamp(1.25rem,_1vw_+_1rem,_1.563rem)] leading-none font-bold w-fit',
        currentVariant,
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon && (
        <AtipyIcon type={ATIPY_ICON.ARROW_LEFT} size='lg' className='mr-5' />
      )}
      {children}
    </motion.button>
  );
};
