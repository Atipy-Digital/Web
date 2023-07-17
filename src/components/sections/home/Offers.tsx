'use client';

import { Box } from '@/components/common/Box';
import { OfferList } from '@/components/primitives/OfferList';

import type { HomeOffersDataType } from '@/ts';

type Props = {
  data: HomeOffersDataType;
};

export const Offers = ({ data }: Props) => {
  return (
    <Box as='section' className='tl mb-14 md:mb-16 lg:mb-20 xl:mb-24'>
      <OfferList data={data.cards} />
    </Box>
  );
};
