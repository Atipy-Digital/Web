'use client';

import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';
import { useTheme } from '@/hooks/use-theme';

import { AtipyImage } from '@/components/common/icons/AtipyImage';

import { Button } from './Button';

import { CARD_TYPE, type CardType } from '@/ts';

interface Props extends CardType {
  size?: 'sm' | 'md';
  className?: string;
  href?: string;
  color?: CARD_TYPE;
}

export const ExpertiseCard = ({
  size = 'sm',
  type,
  title,
  body,
  button,
  color,
  imagesTheme,
  decorativeOrInformative,
  className,
  href,
}: Props) => {
  const { prefixImg, isDark } = useTheme();
  const colorKey: CARD_TYPE = color || type;

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
      CARD_TYPE.MOBILITES,
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
      CARD_TYPE.MOBILITES,
      '!text-black dark:!text-black !border-a-yellow-dark dark:!border-a-yellow-light !bg-a-yellow-dark hover:!bg-white hover:!text-a-yellow-dark hover:dark:!bg-transparent hover:dark:!text-a-yellow-light dark:!bg-a-yellow-light',
    ],
  ]);

  const fallbackImg =
    new Map<CARD_TYPE, string>([
      [CARD_TYPE.ENGINEER, `/imgs/offers/offer-${prefixImg}-access.webp`],
      [CARD_TYPE.DESIGN, `/imgs/offers/offer-${prefixImg}-design.webp`],
      [CARD_TYPE.MOBILITES, `/imgs/offers/offer-${prefixImg}-digital.webp`],
    ]).get(type) || `/imgs/offers/offer-${prefixImg}-access.webp`;

  const newHeaderImg = imagesTheme
    ? isDark
      ? imagesTheme.dark ?? fallbackImg
      : imagesTheme.light ?? fallbackImg
    : fallbackImg;

  const sCard =
    styleCard.get(colorKey) || 'border-5 border-a-blue-dark shadow-a-blue-dark';
  const sCardBtn =
    styleCardBtn.get(colorKey) || 'bg-a-blue-dark dark:!bg-a-blue-light';

  return (
    <article
      className={clsxm(
        'tl w-full flex flex-col rounded-[42px] bg-white dark:bg-background',
        sCard,
        size === 'sm' && 'px-8 py-6',
        className
      )}
    >
      <header className='w-full flex flex-col gap-y-6'>
        <AtipyImage
          isInformative={!decorativeOrInformative}
          isDecorative={decorativeOrInformative}
          src={newHeaderImg}
          className='w-24 h-auto lg:w-28 xl:w-40'
        />
        <h3 className='h3-card'>{title}</h3>
      </header>
      <section className='flex-grow pt-8 pb-6 xl:pt-10'>
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
      </section>
      <footer className='mt-4 sm:mt-0'>
        <Button href={href} icon className={clsxm('tl w-fit', sCardBtn)}>
          {button.label}
        </Button>
      </footer>
    </article>
  );
};
