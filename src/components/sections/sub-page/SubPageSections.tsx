'use client';

import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';
import { useTheme } from '@/hooks/use-theme';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import { Button } from '@/components/primitives/Button';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';

import { useAppStore } from '@/store/use-app-store';

import { type ExpertiseSubPageType, TagColor } from '@/ts';

type Props = {
  data: ExpertiseSubPageType;
  type: 'design' | 'digital' | 'formation' | 'ingenierie';
};

export const SubPageSections = ({ data, type }: Props) => {
  const onResetTags = useAppStore((s) => s.onResetTags);
  const setTagExpertiseActive = useAppStore((s) => s.setTagExpertiseActive);
  const router = useRouter();
  const matchesSM = useMediaQuery(MEDIA_QUERY.SM);
  const { prefixImg } = useTheme();

  const getCardType = (): TagColor => {
    switch (data.footer.btn.color) {
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
    onResetTags();
    setTagExpertiseActive({
      color: getCardType(),
      label: data.footer.btn.tag,
      type: 'expertise',
    });
    router.push('/realisations');
  };

  return (
    <Box className='tl mb-10 md:mb-14 lg:mb-16 xl:mb-20'>
      <div className='px-0 md:px-fluid pt-8 lg:pt-12'>
        <div className='mb-10 md:mb-16 lg:mb-20 xl:mb-24'>
          <MarkdownSection
            col1={{
              reverseMobile: false,
              text: {
                content: data.intro,
              },
            }}
            col2={{
              reverseMobile: false,
              image: {
                url: `/imgs/${type}/intro-${prefixImg}-design.webp`,
                className: 'max-w-[509px]',
              },
            }}
            inverseCol
          />
        </div>

        {data.sections?.map((section) => (
          <MarkdownSection
            {...section}
            key={`sub-page-section-${nanoid(7)}`}
            className='mb-8 md:mb-10 lg:mb-14'
          />
        ))}

        <div className='my-10 flex flex-col items-center justify-center md:mt-14 lg:mt-20 xl:mt-24'>
          <Button
            icon
            variant={data.footer.btn.color}
            onClick={goToProjects}
            className='mb-8 md:mb-10 lg:mb-14 xl:mb-20'
          >
            {data.footer.btn.label}
          </Button>

          <h3 className='text-center leading-tight'>
            {data.footer.titleContact}
            <br />
            Contactez-nous !
          </h3>
          <div className='flex items-center gap-x-2 md:gap-x-6 pt-7'>
            <AtipyIcon
              type={ATIPY_ICON.ENVELOP}
              size={matchesSM ? 'md' : 'xl'}
            />
            <a
              href='mailto:contact@atipy.fr'
              className='text-body1 font-secondary'
            >
              contact@atipy.fr
            </a>
          </div>
        </div>
      </div>
    </Box>
  );
};
