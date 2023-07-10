'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';
import { useTheme } from '@/hooks/use-theme';

import { Button } from './Button';

import { CARD_TYPE, type CardType } from '@/ts';

interface Props extends CardType {
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export const Card = ({
  size = 'sm',
  type,
  title,
  body,
  button,
  onClick,
}: Props) => {
  const { prefixImg } = useTheme();
  const styleCard = new Map<CARD_TYPE, string>([
    [CARD_TYPE.ACCESIBILITY, 'border-5 border-a-blue shadow-a-blue'],
    [CARD_TYPE.DESIGN, 'border-5 border-a-green shadow-a-green'],
    [CARD_TYPE.DIGITAL, 'border-5 border-a-red shadow-a-red'],
    [CARD_TYPE.CONSEIL, 'border-5 border-a-yellow shadow-a-yellow'],
  ]);
  const styleCardBtn = new Map<CARD_TYPE, string>([
    [
      CARD_TYPE.ACCESIBILITY,
      '!text-black !border-a-blue !bg-a-blue hover:!bg-white hover:!text-a-blue hover:dark:!bg-transparent hover:dark:!text-a-blue dark:!bg-a-blue',
    ],
    [
      CARD_TYPE.DESIGN,
      '!text-black !border-a-green !bg-a-green hover:!bg-white hover:!text-a-green hover:dark:!bg-transparent hover:dark:!text-green hover:!text-a-green dark:!bg-a-green',
    ],
    [
      CARD_TYPE.DIGITAL,
      '!text-black !border-a-red !bg-a-red hover:!bg-white hover:!text-a-red hover:dark:!bg-transparent hover:dark:!text-red hover:!text-a-red dark:!bg-a-red',
    ],
    [
      CARD_TYPE.CONSEIL,
      '!text-black !border-a-yellow !bg-a-yellow hover:!bg-white hover:!text-a-yellow hover:dark:!bg-transparent hover:dark:!text-a-yellow hover:!text-yellow dark:!bg-a-yellow',
    ],
  ]);

  const urlHeaderImgs = new Map<CARD_TYPE, string>([
    [CARD_TYPE.ACCESIBILITY, `/imgs/home/offer-${prefixImg}-access.webp`],
    [CARD_TYPE.DESIGN, `/imgs/home/offer-${prefixImg}-design.webp`],
    [CARD_TYPE.DIGITAL, `/imgs/home/offer-${prefixImg}-digital.webp`],
  ]);

  const sCard = styleCard.get(type) || 'border-5 border-a-blue shadow-a-blue';
  const sCardBtn = styleCardBtn.get(type) || 'bg-a-blue dark:!bg-a-blue';
  const urlHeaderImg =
    urlHeaderImgs.get(type) || `/imgs/home/offer-${prefixImg}-access.webp`;

  return (
    <article
      className={clsxm(
        'tl w-full rounded-[42px] bg-white dark:bg-black',
        sCard,
        size === 'sm' && 'px-7 pb-7 pt-5 xl:px-10 xl:pb-9 xl:pt-7'
      )}
    >
      <header className='w-full flex flex-col gap-y-6'>
        <img alt={`logo ${type}`} src={urlHeaderImg} className='w-24 h-auto' />
        <h3 className='h3-card'>{title}</h3>
      </header>
      <main className='pt-8 pb-6 xl:pt-10'>
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className='font-secondary font-normal leading-tight text-body1'>
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
            'tl text-[18px] xl:text-[20px] 1xl:text-[25px]',
            sCardBtn
          )}
        >
          {button.label}
        </Button>
      </footer>
    </article>
  );
};
