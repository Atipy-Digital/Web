'use client';

import { useTheme } from '@/hooks/use-theme';

import { CardPage } from '@/components/primitives/CardPage';

import type { CardExpertisePageType, ExpertisePageDataType } from '@/ts';

type Props = {
  data: ExpertisePageDataType;
};

export const ExpertiseCards = ({ data }: Props) => {
  const { prefixImg, isDark } = useTheme();
  const getNewHeaderImg = (
    card: CardExpertisePageType,
    fallback: string
  ): string => {
    if (!card.imagesTheme) return fallback;

    const { light, dark } = card.imagesTheme;

    return isDark ? dark ?? fallback : light ?? fallback;
  };

  return (
    <div className='list-border-center w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-t-current'>
      {data.cards.map((card) => {
        const urlHeaderImgs = new Map<CardExpertisePageType['type'], string>([
          ['ingenierie', `/imgs/offers/offer-${prefixImg}-access.webp`],
          ['design', `/imgs/offers/offer-${prefixImg}-design.webp`],
          ['mobilites', `/imgs/offers/offer-${prefixImg}-mobilites.webp`],
          ['formation', `/imgs/offers/offer-${prefixImg}-formation.webp`],
        ]);

        const fallbackImg =
          urlHeaderImgs.get(card.type) ||
          `/imgs/offers/offer-${prefixImg}-access.webp`;

        const newHeaderImg = getNewHeaderImg(card, fallbackImg);

        return (
          <CardPage
            key={`card-expertise-page-${card.type}`}
            urlHeaderImg={newHeaderImg}
            href={`/expertises/${card.type}`}
            decorativeOrInformative={card.decorativeOrInformative}
            text={card.text}
            title={card.title}
          />
        );
      })}
    </div>
  );
};
