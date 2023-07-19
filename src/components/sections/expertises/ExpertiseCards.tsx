'use client';

import { useRouter } from 'next/navigation';

import { useTheme } from '@/hooks/use-theme';

import { CardPage } from '@/components/primitives/CardPage';

import type { CardExpertisePageType, ExpertisePageDataType } from '@/ts';

type Props = {
  data: ExpertisePageDataType;
};

export const ExpertiseCards = ({ data }: Props) => {
  const router = useRouter();
  const { prefixImg } = useTheme();

  return (
    <div className='list-border-center w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-t-current'>
      {data.cards.map((card) => {
        const urlHeaderImgs = new Map<CardExpertisePageType['type'], string>([
          ['ingenierie', `/imgs/offers/offer-${prefixImg}-access.webp`],
          ['design', `/imgs/offers/offer-${prefixImg}-design.webp`],
          ['digital', `/imgs/offers/offer-${prefixImg}-digital.webp`],
          ['formation', `/imgs/offers/offer-${prefixImg}-formation.webp`],
        ]);

        const urlHeaderImg =
          urlHeaderImgs.get(card.type) ||
          `/imgs/offers/offer-${prefixImg}-access.webp`;

        return (
          <CardPage
            key={`card-expertise-page-${card.type}`}
            urlHeaderImg={urlHeaderImg}
            onClick={() => router.push(`/expertises/${card.type}`)}
            text={card.text}
            title={card.title}
          />
        );
      })}
    </div>
  );
};
