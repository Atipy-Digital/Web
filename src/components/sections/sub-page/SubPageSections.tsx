'use client';

import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import iconsDesign from '@/components/icons/design';
import iconsDigital from '@/components/icons/digital';
import iconsFormation from '@/components/icons/formation';
import iconsIngenierie from '@/components/icons/ingenierie';
import iconsMobilites from '@/components/icons/mobilites';
import { LinkButton } from '@/components/primitives/LinkButton';
import { MarkdownSection } from '@/components/primitives/MarkdownSection';
import { MarkdownText } from '@/components/primitives/MarkdownText';

import { useAppStore } from '@/store/use-app-store';

import { type ExpertiseSubPageType, TagColor } from '@/ts';

type Props = {
  data: ExpertiseSubPageType;
  type: 'design' | 'mobilites' | 'formation' | 'ingenierie';
};

export const SubPageSections = ({ data }: Props) => {
  const onResetTags = useAppStore((s) => s.onResetTags);
  const setTagExpertiseActive = useAppStore((s) => s.setTagExpertiseActive);
  const router = useRouter();
  const matchesSM = useMediaQuery(MEDIA_QUERY.SM);
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const getCardType = (): TagColor => {
    if (!data.footer?.btn?.color) return 'default';
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

  const goToProjects = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) {
      event.preventDefault();
    }
    if (!data.footer?.btn?.tag) return;
    onResetTags();
    setTagExpertiseActive({
      color: getCardType(),
      label: data.footer.btn.tag,
      type: 'expertise',
    });
    setShouldNavigate(true);
  };

  useEffect(() => {
    if (shouldNavigate) {
      router.push('/realisations');
      setShouldNavigate(false);
    }
  }, [shouldNavigate, router]);

  const IconComponent = useMemo(() => {
    if (data.icon.type === 'design') {
      return (
        iconsDesign[data.icon.value ?? 'formation'] || iconsDesign['formation']
      );
    }

    if (data.icon.type === 'formation') {
      return (
        iconsFormation[data.icon.value ?? 'formation'] ||
        iconsFormation['formation']
      );
    }

    if (data.icon.type === 'digital') {
      return (
        iconsDigital[data.icon.value ?? 'formation'] ||
        iconsDigital['formation']
      );
    }
    if (data.icon.type === 'ingenierie') {
      return (
        iconsIngenierie[data.icon.value ?? 'formation'] ||
        iconsIngenierie['formation']
      );
    }
    if (data.icon.type === 'mobilites') {
      return (
        iconsMobilites[data.icon.value ?? 'mobilites'] ||
        iconsMobilites['mobilites']
      );
    }

    return null;
  }, [data.icon]);

  return (
    <Box className='tl sm:px2-fluid lg:px-fluid mb-10 md:mb-14 lg:mb-16 xl:mb-20'>
      <div className='px-0 sm:px2-fluid lg:px-fluid md:pt-12'>
        {data?.intro && (
          <div className='flex flex-col-reverse md:flex-row md:items-center justify-between mb-10 md:mb-16 lg:mb-20 xl:mb-24 md:gap-8 lg:gap-12 xl:gap-20'>
            <div className='prose max-w-none dark:prose-invert lg:prose-xl prose-headings:whitespace-pre-wrap prose-p:whitespace-pre-wrap'>
              <MarkdownText
                components={{
                  p: ({ children }) => (
                    <p className='block w-full flex-grow'>{children}</p>
                  ),
                  code: ({ children }) => (
                    <u className='underline'>{children}</u>
                  ),
                }}
              >
                {data.intro}
              </MarkdownText>
            </div>

            {IconComponent && (
              <div>
                <IconComponent className='h-auto w-28 md:w-36 lg:w-48 xl:w-64' />
              </div>
            )}
          </div>
        )}

        {data.sections?.map((section) => (
          <MarkdownSection
            {...section}
            key={`sub-page-section-${nanoid(7)}`}
            className='mb-8 md:mb-10 lg:mb-14'
          />
        ))}

        {((data.footer?.btn?.color && data.footer?.btn?.label) ||
          data.footer?.titleContact) && (
          <div className='my-10 flex flex-col items-center justify-center md:mt-14 lg:mt-20 xl:mt-24'>
            {data.footer?.btn?.color && data.footer?.btn?.label && (
              <LinkButton
                icon
                variant={data.footer.btn.color}
                onClick={(e) => goToProjects(e)}
                href='/realisations'
                className='mb-8 md:mb-10 lg:mb-14 xl:mb-20'
                forceBlackText={data.footer.btn.color === 'yellow'}
              >
                {data.footer.btn.label}
              </LinkButton>
            )}
            {data.footer?.titleContact && (
              <>
                <h3 className='text-center leading-tight'>
                  {data.footer.titleContact}
                  <br />
                  Contactez-nous !
                </h3>
                <div className='flex items-center gap-x-2 md:gap-x-6 pt-7'>
                  <AtipyIcon
                    type={ATIPY_ICON.ENVELOP}
                    size={matchesSM ? 'md' : 'xl'}
                    isDecorative
                  />
                  <a
                    href='mailto:contact@atipy.fr'
                    className='text-body1 font-secondary'
                  >
                    contact@atipy.fr
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Box>
  );
};
