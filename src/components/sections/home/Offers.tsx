'use client';

import clsxm from '@/lib/clsxm';

import { Card } from '@/components/primitives/Card';

import type { HomeOffersDataType } from '@/ts';

type Props = {
  data: HomeOffersDataType;
};

export const Offers = ({ data }: Props) => {
  const lgGridItems = () => {
    switch (data.cards.length) {
      case 1:
        return 'lg:grid-cols-1';
      case 2:
        return 'lg:grid-cols-2';
      case 3:
        return 'lg:grid-cols-3';
      case 4:
        return 'lg:grid-cols-2';

      default:
        return 'lg:grid-cols-1';
    }
  };

  return (
    <section
      className={clsxm(
        'tl px-fluid py-fluid w-full grid grid-cols-1 gap-8 xl:gap-16',
        lgGridItems()
      )}
    >
      {data.cards.map((item) => (
        <Card key={`home-offer-card-${item.type}`} {...item} />
      ))}
    </section>
  );
};
