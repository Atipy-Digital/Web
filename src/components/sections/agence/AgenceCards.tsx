'use client';

import { useRouter } from 'next/navigation';

import { ATIPY_ICON } from '@/components/common/icons/AtipyIcon';
import { CardPage } from '@/components/primitives/CardPage';

import type { AgencePageDataType } from '@/ts';

type Props = {
  data: AgencePageDataType;
};

export const AgenceCards = ({ data }: Props) => {
  const router = useRouter();
  return (
    <div className='list-border-center w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-t-current'>
      {data.cards.map((card) => {
        const getIconType = () => {
          switch (card.type) {
            case 'about':
              return ATIPY_ICON.ABOUT;
            case 'tribu':
              return ATIPY_ICON.TRIBU;
            case 'conception':
              return ATIPY_ICON.CONCEPTION;
            case 'partners':
              return ATIPY_ICON.PARTNERS;

            default:
              return ATIPY_ICON.CROSS;
          }
        };

        return (
          <CardPage
            key={`card-agence-${card.type}`}
            iconType={getIconType()}
            onClick={() => router.push(`/agence/${card.type}`)}
            text={card.text}
            title={card.title}
          />
        );
      })}
    </div>
  );
};
