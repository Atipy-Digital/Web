'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import clsxm from '@/lib/clsxm';
import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';
import { usePreventScroll } from '@/hooks/use-prevents-scroll';

import { useAppStore } from '@/store/use-app-store';

import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';
import { MarkdownText } from '../primitives/MarkdownText';
import { Portal } from '../primitives/Portal';

import type { EngagementType } from '@/ts';

type Props = {
  data: EngagementType;
};

export const EngageModal = ({ data }: Props) => {
  const isOpenModalEngage = useAppStore((s) => s.isOpenModalEngage);
  const setOpenModalEngage = useAppStore((s) => s.setOpenModalEngage);
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  usePreventScroll(isOpenModalEngage);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableElement = useRef<HTMLElement | null>(null);
  const lastFocusableElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenModalEngage(false);
      } else if (e.key === 'Tab' && isOpenModalEngage) {
        trapFocus(e);
      }
    };

    const trapFocus = (e: KeyboardEvent) => {
      if (!firstFocusableElement.current || !lastFocusableElement.current) {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement.current) {
          e.preventDefault();
          lastFocusableElement.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement.current) {
          e.preventDefault();
          firstFocusableElement.current?.focus();
        }
      }
    };

    if (isOpenModalEngage) {
      document.addEventListener('keydown', handleKeyDown);
      // Ajout d'un délai pour s'assurer que la modale est rendue
      setTimeout(() => {
        if (modalRef.current) {
          const focusableElements =
            modalRef.current.querySelectorAll<HTMLElement>(
              'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
            );
          if (focusableElements.length > 0) {
            firstFocusableElement.current = focusableElements[0];
            lastFocusableElement.current =
              focusableElements[focusableElements.length - 1];
            firstFocusableElement.current?.focus();
          }
        }
      }, 100); // Délai de 100 ms pour s'assurer que la modale est rendue
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenModalEngage, setOpenModalEngage]);

  return (
    <Portal id='engage-modal'>
      <motion.div
        className='fixed bg-[rgb(0,0,0,0.71)] inset-0 z-[150] px-fluid overflow-x-hidden overflow-y-auto py-fluid flex'
        onClick={() => setOpenModalEngage(false)}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <motion.div
          className={clsxm(
            'px-fluid max-w-7xl mx-auto w-full',
            'relative bg-white border-5 border-a-yellow-or shadow-a-yellow-or rounded-[42px] flex flex-col !pt-0 !pb-6 sm:!py-6 xl:!py-9 m-auto',
            'dark:bg-background'
          )}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: [0.165, 0.84, 0.44, 1.0],
            },
          }}
          exit={{
            opacity: 0,
          }}
          onClick={(e) => e.stopPropagation()}
          ref={modalRef}
          tabIndex={-1}
        >
          <div className='w-full flex py-4 sm:py-0'>
            <button
              className='ml-auto flex-shrink-0 cursor-pointer'
              onClick={() => {
                setOpenModalEngage(false);
              }}
            >
              <AtipyIcon type={ATIPY_ICON.CROSS} size={matchSM ? 'lg' : 'xl'} />
            </button>
          </div>

          <div className='w-full flex flex-col px-2 pb-2 xl:px-14 xl:pb-6'>
            <h3 className='mb-6 lg:mb-8 xl:mb-10 text-center'>{data.title}</h3>

            <MarkdownText className='font-secondary text-[16px] sm:text-body1 leading-snug mb-4 lg:mb-6 xl:mb-8'>
              {data.intro}
            </MarkdownText>
            <MarkdownText className='font-secondary text-[16px] sm:text-body1 leading-snug'>
              {data.text}
            </MarkdownText>
            <MarkdownText className='font-secondary text-[16px] sm:text-body1 leading-snug my-4 lg:my-6 xl:my-8'>
              {data.outro}
            </MarkdownText>

            <p className='font-secondary text-body1 leading-snug'>
              <span className='block w-full font-primary'>
                <strong>La Tribu</strong>
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Portal>
  );
};
