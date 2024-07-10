'use client';

import {
  motion,
  useAnimationControls,
  useScroll,
  Variants,
} from 'framer-motion';
import { useEffect } from 'react';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { ATIPY_ICON, AtipyIcon } from './icons/AtipyIcon';

const isBrowser = () => typeof window !== 'undefined';
function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants: Variants = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

export const ScrollToTopButton = () => {
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();
  const matchXL = useMediaQuery(MEDIA_QUERY.XL);
  const matchLG = useMediaQuery(MEDIA_QUERY.LG);
  const smallDevice = matchLG ? 0.95 : 0.939;
  const valueToHide = matchXL ? 0.96 : smallDevice;

  useEffect(() => {
    return scrollYProgress.on('change', (latestValue) => {
      if (latestValue > 0.5) {
        if (latestValue > valueToHide) {
          controls.start('hide');
        } else {
          controls.start('show');
        }
      } else {
        controls.start('hide');
      }
    });
  });

  return (
    <motion.a
      className='fixed bottom-0 right-0 p-4 md:p-6 xl:p-8 2xl:p-10 z-[5]'
      variants={ScrollToTopContainerVariants}
      initial='hide'
      animate={controls}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href='#top'
    >
      <div className='flex items-center justify-center rounded-full w-10 h-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-[102px] 2xl:h-[102px]'>
        <AtipyIcon
          type={ATIPY_ICON.ARROW_UP}
          isAriaHidden={true}
          size='full'
          role='img'
        />
      </div>
    </motion.a>
  );
};
