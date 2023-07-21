'use client';

import { useRouter } from 'next/navigation';

import clsxm from '@/lib/clsxm';

import { ExpertiseCard } from './ExpertiseCard';

import { CARD_TYPE, type CardType } from '@/ts';

type Props = {
  data: CardType[];
  className?: string;
};

export const OfferList = ({ data, className }: Props) => {
  const router = useRouter();

  const lgGridItems = () => {
    switch (data.length) {
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
    <div
      className={clsxm(
        'tl sm:px-fluid py-fluid xl:!pt-0 w-full grid grid-cols-1 gap-8 xl:gap-14',
        lgGridItems(),
        className
      )}
    >
      {data.map((item) => {
        const onClick = () => {
          switch (item.type) {
            case CARD_TYPE.CONSEIL:
              router.push('/expertises/formation');
              break;
            case CARD_TYPE.DESIGN:
              router.push('/expertises/design');
              break;
            case CARD_TYPE.DIGITAL:
              router.push('/expertises/digital');
              break;
            case CARD_TYPE.ENGINEER:
              router.push('/expertises/ingenierie');
              break;

            default:
              break;
          }
        };

        return (
          <ExpertiseCard
            key={`home-offer-card-${item.type}`}
            {...item}
            className='min-h-[350px] sm:min-h-fit 2xl:min-h-[563px]'
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};
