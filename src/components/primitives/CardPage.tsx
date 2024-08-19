'use client';

import { MEDIA_QUERY, useMediaQuery } from '@/hooks/use-media';

import { AtipyImage } from '@/components/common/icons/AtipyImage';
import { LinkButton } from '@/components/primitives/LinkButton';

import { MarkdownText } from './MarkdownText';
import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

type Props = {
  iconType?: ATIPY_ICON;
  title: string;
  text: string;
  onClick?: () => void;
  href?: string;
  urlHeaderImg?: string;
};

export const CardPage = ({
  iconType,
  href,
  text,
  title,
  urlHeaderImg,
}: Props) => {
  const matchSM = useMediaQuery(MEDIA_QUERY.SM);
  return (
    <div className='w-full px-fluid !py-8 md:!p-8 xl:!p-10  2xl:!p-12 3xl:!p-14 flex flex-col 2xl:min-h-[675px] desktop:min-h-[748px]'>
      <div className='w-full flex gap-8 flex-col mb-8 md:mb-0'>
        {iconType && (
          <div className='max-h-[96px] xl:max-h-[105px] [&_svg]:w-auto [&_svg]:h-full'>
            {iconType && <AtipyIcon isDecorative type={iconType} />}
          </div>
        )}

        {urlHeaderImg && (
          <div className='max-h-[80px] lg:max-h-[96px] xl:max-h-[100px]'>
            <AtipyImage
              isDecorative
              src={urlHeaderImg}
              className='block h-full w-auto object-contain'
            />
          </div>
        )}

        <h2 className='h3 md:pb-8'>
          {iconType && (
            <>
              {iconType === ATIPY_ICON.ABOUT && !matchSM ? (
                <>
                  Qui <br />
                  sommes-nous ?
                </>
              ) : (
                <>
                  {title.includes('Qui sommes-nous') ? (
                    <>
                      Qui{' '}
                      <span className='hidden md:inline'>
                        <br />
                      </span>
                      sommes-nous ?
                    </>
                  ) : (
                    title
                  )}
                </>
              )}
            </>
          )}
          {urlHeaderImg && title}
        </h2>
      </div>
      <MarkdownText
        className='text-body1 font-secondary'
        components={{
          code: ({ children }) => <span className='underline'>{children}</span>,
        }}
      >
        {text}
      </MarkdownText>

      <div className='flex w-full mt-auto pt-8 xl:pt-10 2xl:pt-4'>
        <LinkButton
          icon
          href={href}
          className='!text-[16px] lg:!text-[18px] 2xl:!text-[20px]'
        >
          En savoir plus
        </LinkButton>
      </div>
    </div>
  );
};
