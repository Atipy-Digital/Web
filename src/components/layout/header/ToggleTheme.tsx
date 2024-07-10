'use client';

import { motion } from 'framer-motion';

import clsxm from '@/lib/clsxm';
import { useTheme } from '@/hooks/use-theme';

import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const ToggleTheme = () => {
  const {isDark, setTheme} = useTheme();

  const toggleSwitch = () => {
    isDark ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className='ta flex flex-col items-center lg:ml-10 xl:ml-14 w-[78px] ml-auto overflow-hidden'>
      <motion.button
        className={clsxm(
          'relative flex justify-start rounded-full p-[2px] cursor-pointer',
          'w-[52px] h-[27px] lg:w-[66px] lg:h-[36px]',
          isDark ? 'bg-white' : 'bg-background',
          isDark && '!justify-end'
        )}
        onClick={toggleSwitch}
        layoutRoot
        layout
      >
        <motion.span
          className={clsxm(
            'flex items-center justify-center rounded-[50%] z-[1] transform-none',
            'w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]',
            isDark ? 'bg-background text-white' : 'bg-white text-black'
          )}
          layout
          transition={spring}
        >
          <AtipyIcon
            type={isDark ? ATIPY_ICON.MOON : ATIPY_ICON.SUN}
            isAriaHidden={true}
            hideAriaLabel={true}
            className='w-[18px] lg:w-[24px]'
          />
        </motion.span>

        <span
          className={clsxm(
            'absolute top-1/2 -translate-y-1/2 right-[6px]',
            isDark ? 'text-black' : 'text-white'
          )}
        >
          <AtipyIcon
            type={ATIPY_ICON.MOON}
            className='w-[18px] lg:w-[24px]'
            isAriaHidden={true}
            hideAriaLabel={true}
          />
        </span>
        <span
          className={clsxm(
            'absolute top-1/2 -translate-y-1/2 left-[6px]',
            isDark ? 'text-black' : 'text-white'
          )}
        >
          <AtipyIcon
            type={ATIPY_ICON.SUN}
            className='w-[18px] lg:w-[24px]'
            isAriaHidden={true}
            hideAriaLabel={true}
          />
        </span>
      </motion.button>

      <div className='hidden md:block mt-1 text-[12px]'>
        {!isDark ? 'Mode clair' : 'Mode sombre'}
      </div>
    </div>
  );
};
