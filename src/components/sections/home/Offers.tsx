'use client';

import clsxm from '@/lib/clsxm';

import { Box } from '@/components/common/Box';
import { ExpertiseCard } from '@/components/primitives/ExpertiseCard';

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
    <Box as='section' className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <div
        className={clsxm(
          'tl px-fluid py-fluid xl:!pt-0 w-full grid grid-cols-1 gap-8 xl:gap-14',
          lgGridItems()
        )}
      >
        {data.cards.map((item) => (
          <ExpertiseCard
            key={`home-offer-card-${item.type}`}
            {...item}
            className='2xl:min-h-[563px]'
          />
        ))}
      </div>
    </Box>
  );
};
