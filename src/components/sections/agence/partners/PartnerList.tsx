'use client';

import { Box } from '@/components/common/Box';
import { PartnerItem } from '@/components/primitives/PartnerItem';

import { PartnerType } from '@/ts';

type Props = {
  data: PartnerType[];
};

export const PartnerList = ({ data }: Props) => {
  return (
    <Box
      as='section'
      className='tl sm:px2-fluid lg:px-fluid mb-10 md:mb-14 lg:mb-16 xl:mb-20 !pt-0 !pb-0 md:py-fluid xl:!pt-0'
    >
      <ul className='sm:px2-fluid lg:px-fluid md:list-border-b flex flex-col mt-8 lg:mt-10 xl:mt-0 gap-16 xl:gap-20'>
        {data.map((partner) => (
          <PartnerItem {...partner} key={`partner-${partner.name}`} />
        ))}
      </ul>
    </Box>
  );
};
