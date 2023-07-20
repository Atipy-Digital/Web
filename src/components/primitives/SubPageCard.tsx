'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import iconsDesign from '../icons/design';
import iconsFormation from '../icons/formation';

import { CARD_TYPE, ExpertiseSubPageType } from '@/ts';

type Props = {
  type: CARD_TYPE;
  icon: ExpertiseSubPageType['icon'];
  path: string;
  title: string;
};

export const SubPageCard = ({ type, icon, path, title }: Props) => {
  const router = useRouter();
  const styleCard = new Map<CARD_TYPE, string>([
    [
      CARD_TYPE.ENGINEER,
      'border-3 md:border-5 border-a-blue-dark shadow-a-blue-dark-small md:shadow-a-blue-dark dark:border-a-blue-light dark:shadow-a-blue-light-small md:dark:shadow-a-blue-light',
    ],
    [
      CARD_TYPE.DESIGN,
      'border-3 md:border-5 border-a-green-dark shadow-a-green-dark-small dark:border-a-green-light dark:shadow-a-green-light-small  md:dark:shadow-a-green-light',
    ],
    [
      CARD_TYPE.DIGITAL,
      'border-3 md:border-5 border-a-red-dark shadow-a-red-dark-small dark:border-a-red-light dark:shadow-a-red-light-small md:dark:shadow-a-red-light',
    ],
    [
      CARD_TYPE.CONSEIL,
      'border-3 md:border-5 border-a-yellow-dark shadow-a-yellow-dark-small dark:border-a-yellow-light dark:shadow-a-yellow-light-small md:dark:shadow-a-yellow-light',
    ],
  ]);

  const sCard =
    styleCard.get(type) ||
    'border-3 md:border-5 border-a-blue-dark shadow-a-blue-dark-small md:shadow-a-blue-dark';

  const IconComponent = useMemo(() => {
    if (icon.type === 'design') {
      return iconsDesign[icon.value ?? 'computer'];
    }

    if (icon.type === 'formation') {
      return iconsFormation[icon.value ?? 'formation'];
    }

    return null;
  }, [icon]);

  return (
    <article
      className={clsxm(
        'tl cursor-pointer w-full flex-1 flex flex-col justify-center rounded-[30px] bg-white dark:bg-black',
        sCard,
        'p-2 xl:p-4 text-center'
      )}
      onClick={() => router.push(path)}
    >
      {IconComponent && (
        <IconComponent className='flex-shrink-0 h-[80px] w-auto mx-auto lg:mr-auto lg:ml-[inherit]' />
      )}
      <div className='py-2 lg:py-4 xl:py-5'>
        <p className='text-body1 font-bold leading-none text-center'>{title}</p>
      </div>
    </article>
  );
};
