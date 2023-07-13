'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';
import { useTheme } from '@/hooks/use-theme';

import { Button } from './Button';

import { CARD_TYPE, type CardType } from '@/ts';

interface Props extends CardType {
  size?: 'sm' | 'md';
  onClick?: () => void;
  className?: string;
}

export const ExpertiseCard = ({
  size = 'sm',
  type,
  title,
  body,
  button,
  onClick,
  className,
}: Props) => {
  const { prefixImg } = useTheme();
  const styleCard = new Map<CARD_TYPE, string>([
    [
      CARD_TYPE.ENGINEER,
      'border-5 border-a-blue-dark shadow-a-blue-dark dark:border-a-blue-light dark:shadow-a-blue-light',
    ],
    [
      CARD_TYPE.DESIGN,
      'border-5 border-a-green-dark shadow-a-green-dark dark:border-a-green-light dark:shadow-a-green-light',
    ],
    [
      CARD_TYPE.DIGITAL,
      'border-5 border-a-red-dark shadow-a-red-dark dark:border-a-red-light dark:shadow-a-red-light',
    ],
    [
      CARD_TYPE.CONSEIL,
      'border-5 border-a-yellow-dark shadow-a-yellow-dark dark:border-a-yellow-light dark:shadow-a-yellow-light',
    ],
  ]);
  const styleCardBtn = new Map<CARD_TYPE, string>([
    [
      CARD_TYPE.ENGINEER,
      '!text-white dark:!text-black !border-a-blue-dark dark:!border-a-blue-light !bg-a-blue-dark hover:!bg-white hover:!text-a-blue-dark hover:dark:!bg-transparent hover:dark:!text-a-blue-light dark:!bg-a-blue-light',
    ],
    [
      CARD_TYPE.DESIGN,
      '!text-white dark:!text-black !border-a-green-dark dark:!border-a-green-light  !bg-a-green-dark hover:!bg-white hover:!text-a-green-dark hover:dark:!bg-transparent hover:dark:!text-a-green-light dark:!bg-a-green-light',
    ],
    [
      CARD_TYPE.DIGITAL,
      '!text-white dark:!text-black !border-a-red-dark dark:!border-a-red-light !bg-a-red-dark hover:!bg-white hover:!text-a-red-dark hover:dark:!bg-transparent hover:dark:!text-a-red-light dark:!bg-a-red-light',
    ],
    [
      CARD_TYPE.CONSEIL,
      '!text-white dark:!text-black !border-a-yellow-dark dark:!border-a-yellow-light !bg-a-yellow-dark hover:!bg-white hover:!text-a-yellow-dark hover:dark:!bg-transparent hover:dark:!text-a-yellow-light dark:!bg-a-yellow-light',
    ],
  ]);

  const urlHeaderImgs = new Map<CARD_TYPE, string>([
    [CARD_TYPE.ENGINEER, `/imgs/home/offer-${prefixImg}-access.webp`],
    [CARD_TYPE.DESIGN, `/imgs/home/offer-${prefixImg}-design.webp`],
    [CARD_TYPE.DIGITAL, `/imgs/home/offer-${prefixImg}-digital.webp`],
  ]);

  const sCard =
    styleCard.get(type) || 'border-5 border-a-blue-dark shadow-a-blue-dark';
  const sCardBtn =
    styleCardBtn.get(type) || 'bg-a-blue-dark dark:!bg-a-blue-light';
  const urlHeaderImg =
    urlHeaderImgs.get(type) || `/imgs/home/offer-${prefixImg}-access.webp`;

  return (
    <article
      className={clsxm(
        'tl w-full flex flex-col rounded-[42px] bg-white dark:bg-black',
        sCard,
        size === 'sm' && 'px-8 py-6',
        className
      )}
    >
      <header className='w-full flex items-center justify-between md:justify-start md:items-start md:flex-col gap-y-6'>
        <img alt={`logo ${type}`} src={urlHeaderImg} className='w-24 h-auto' />
        <h3 className='h3-card'>{title}</h3>
      </header>
      <main className='flex-grow pt-8 pb-6 xl:pt-10'>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className='font-secondary font-normal leading-snug text-body1 w-full'>
                {children}
              </p>
            ),
          }}
        >
          {body}
        </ReactMarkdown>
      </main>
      <footer>
        <Button
          onClick={onClick}
          icon
          className={clsxm(
            'tl w-full sm:w-fit text-[18px] xl:text-[20px] 1xl:text-[25px]',
            sCardBtn
          )}
        >
          {button.label}
        </Button>
      </footer>
    </article>
  );
};
