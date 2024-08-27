'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { AtipyImage } from '@/components/common/icons/AtipyImage';

import { MarkdownText } from './MarkdownText';
import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

import type { PartnerType } from '@/ts';

enum PARTNER_TAB {
  ABOUT_US = 'ABOUT_US',
  COLLABORATE = 'COLLABORATE',
  PROJECTS = 'PROJECTS',
}

const tabs = [
  {
    id: PARTNER_TAB.ABOUT_US,
    label: 'Qui sont-ils ?',
  },
  {
    id: PARTNER_TAB.COLLABORATE,
    label: 'Pourquoi collaborer ?',
  },
  {
    id: PARTNER_TAB.PROJECTS,
    label: 'Projets en collaboration',
  },
];

export const PartnerItem = ({
  name,
  logo,
  aboutUs,
  collaborate,
  projects,
  isSingle,
}: PartnerType) => {
  const [activeTab, setActiveTab] = useState<PARTNER_TAB>(PARTNER_TAB.ABOUT_US);

  return (
    <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
      <li className='w-full flex flex-col lmd:flex-row gap-8 lg:gap-11 xl:gap-24 md:pb-16 xl:pb-20'>
        <div
          className={clsxm(
            'relative flex justify-center items-center',
            'w-40 h-40 rounded-[20px] sm:w-56 sm:h-56 sm:rounded-[30px]',
            'flex-shrink-0 overflow-hidden',
            'border-5 border-a-yellow-dark dark:border-a-yellow-light',
            'shadow-a-yellow-dark dark:shadow-a-yellow-light'
          )}
        >
          <AtipyImage
            src={logo}
            altText={`Logo de ${name}`}
            className='object-contain w-full h-full absolute inset-0'
            isDecorative={false}
            isInformative
          />
        </div>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between flex-col md:flex-row w-full md:border-b border-b-current'>
            {tabs.map((tab) => {
              const getLabel = () => {
                if (tab.id !== PARTNER_TAB.ABOUT_US) return tab.label;

                return isSingle ? 'Qui est-il ?' : tab.label;
              };

              return (
                <Fragment key={`${tab.id}-${name}`}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                    }}
                    className='relative py-2 md:pb-5 w-full text-left border-b border-b-current md:border-none'
                  >
                    <p className='text-[20px] lmd:text-[18px] lg:text-[20px] xl:text-body1 font-bold flex items-center md:block'>
                      {getLabel()}
                      <AtipyIcon
                        isDecorative
                        type={ATIPY_ICON.ARROW_RIGHT}
                        size='md'
                        className={clsxm(
                          'ml-auto md:hidden transition-transform',
                          activeTab === tab.id && 'rotate-90'
                        )}
                      />
                    </p>
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId={`line-${name}`}
                        className='hidden md:block absolute bottom-0 left-0 right-0 z-[1] bg-a-yellow-dark dark:bg-a-yellow-light h-2'
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {activeTab === tab.id && (
                      <motion.span
                        className='absolute bottom-0 left-0 right-0 z-[1] bg-a-yellow-dark dark:bg-a-yellow-light h-1 md:hidden'
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.8,
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        exit={{ width: '0%' }}
                      />
                    )}
                  </button>

                  {activeTab === tab.id && (
                    <motion.div
                      className='block w-full origin-center md:hidden'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {activeTab === PARTNER_TAB.ABOUT_US && (
                        <MarkdownText className='py-3 sm:pt-7 text-body1'>
                          {aboutUs}
                        </MarkdownText>
                      )}
                      {activeTab === PARTNER_TAB.COLLABORATE && (
                        <MarkdownText className='py-3 sm:pt-7 text-body1'>
                          {collaborate}
                        </MarkdownText>
                      )}
                      {activeTab === PARTNER_TAB.PROJECTS && (
                        <MarkdownText className='py-3 sm:pt-7 text-body1'>
                          {projects}
                        </MarkdownText>
                      )}
                    </motion.div>
                  )}
                </Fragment>
              );
            })}
          </div>

          <div className='hidden w-full origin-center md:block'>
            {activeTab === PARTNER_TAB.ABOUT_US && (
              <MarkdownText className='py-3 sm:pt-7 text-body1'>
                {aboutUs}
              </MarkdownText>
            )}
            {activeTab === PARTNER_TAB.COLLABORATE && (
              <MarkdownText className='py-3 sm:pt-7 text-body1'>
                {collaborate}
              </MarkdownText>
            )}
            {activeTab === PARTNER_TAB.PROJECTS && (
              <MarkdownText className='py-3 sm:pt-7 text-body1'>
                {projects}
              </MarkdownText>
            )}
          </div>
        </div>
      </li>
    </AnimatePresence>
  );
};
