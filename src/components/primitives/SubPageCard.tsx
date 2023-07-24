'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import clsxm from '@/lib/clsxm';

import iconsDesign from '../icons/design';
import iconsDigital from '../icons/digital';
import iconsFormation from '../icons/formation';
import iconsIngenierie from '../icons/ingenierie';

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
      return iconsDesign[icon.value ?? 'formation'] || iconsDesign['formation'];
    }

    if (icon.type === 'formation') {
      return (
        iconsFormation[icon.value ?? 'formation'] || iconsFormation['formation']
      );
    }

    if (icon.type === 'digital') {
      return (
        iconsDigital[icon.value ?? 'formation'] || iconsDigital['formation']
      );
    }
    if (icon.type === 'ingenierie') {
      return (
        iconsIngenierie[icon.value ?? 'formation'] ||
        iconsIngenierie['formation']
      );
    }

    return null;
  }, [icon]);

  return (
    <article
      className={clsxm(
        'tl cursor-pointer w-full flex-1 flex flex-col justify-center rounded-[30px] bg-white dark:bg-background',
        sCard,
        'p-2 text-center'
      )}
      onClick={() => router.push(path)}
    >
      {IconComponent && (
        <IconComponent className='flex-shrink-0 h-[80px] md:h-[96px] lg:h-[128px] 2xl:h-[150px] w-auto mx-auto' />
      )}
      <div className='pb-2 lg:pb-4 xl:pb-5'>
        <p className='text-[16px] sm:text-body1 font-bold leading-none text-center break-words'>
          {title}
        </p>
      </div>
    </article>
  );
};
