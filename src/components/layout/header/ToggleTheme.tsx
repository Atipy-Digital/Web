'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';
import { useTheme } from '@/hooks/use-theme';

import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const ToggleTheme = () => {
  const { isDark, setTheme } = useTheme();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleSwitch = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => setShowConfirmation(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <div className='ta flex flex-col items-center lg:ml-10 xl:ml-14 w-[78px] ml-auto overflow-hidden relative'>
      <motion.button
        role='button'
        aria-pressed={isDark}
        aria-label={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
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
            className='w-[18px] lg:w-[24px]'
            isInformative
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
            isInformative
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
            isInformative
          />
        </span>
      </motion.button>

      <span className='hidden md:block mt-1 text-[12px]'>
        {!isDark ? 'Mode clair' : 'Mode sombre'}
      </span>

      {showConfirmation && (
        <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white px-3 py-1 rounded text-sm'>
          {isDark ? 'Mode sombre activé' : 'Mode clair activé'}
        </div>
      )}
    </div>
  );
};
