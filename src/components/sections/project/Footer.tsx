'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/primitives/Button';

import { useAppStore } from '@/store/use-app-store';

import type { ProjectType, TagColor } from '@/ts';

type Props = {
  data: ProjectType['footer'];
};

export const Footer = ({ data }: Props) => {
  const onResetTags = useAppStore((s) => s.onResetTags);
  const setTagExpertiseActive = useAppStore((s) => s.setTagExpertiseActive);
  const router = useRouter();

  const getCardType = (): TagColor => {
    if (!data?.btn?.color) return 'default';
    switch (data.btn.color) {
      case 'blue':
        return 'a-blue';
      case 'green':
        return 'a-green';
      case 'red':
        return 'a-red';
      case 'yellow':
        return 'a-yellow';

      default:
        return 'default';
    }
  };

  const goToProjects = () => {
    if (!data?.btn?.tag) return;
    onResetTags();
    setTagExpertiseActive({
      color: getCardType(),
      label: data.btn.tag,
      type: 'expertise',
    });
    router.push('/realisations');
  };

  return (
    <>
      {data?.btn?.color && data?.btn?.label && data?.btn?.tag && (
        <div className='my-10 flex flex-col items-center justify-center md:mt-14 lg:mt-20 xl:mt-24'>
          {data?.btn?.color && data?.btn?.label && (
            <Button
              icon
              variant={data.btn.color}
              onClick={goToProjects}
              className='mb-8 md:mb-10 lg:mb-14 xl:mb-20'
            >
              {data.btn.label}
            </Button>
          )}
        </div>
      )}
    </>
  );
};
