'use client';

import { Button } from './Button';
import { MarkdownText } from './MarkdownText';
import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

type Props = {
  iconType?: ATIPY_ICON;
  title: string;
  text: string;
  onClick: () => void;
  urlHeaderImg?: string;
};

export const CardPage = ({
  iconType,
  onClick,
  text,
  title,
  urlHeaderImg,
}: Props) => {
  return (
    <div className='w-full px-fluid !py-8 md:!p-8 xl:!p-10  2xl:!p-12 3xl:!p-14 flex flex-col 2xl:min-h-[675px] desktop:min-h-[748px]'>
      <div className='w-full flex gap-8 flex-col items-center md:items-start mb-8 md:mb-0'>
        {iconType && (
          <div className='max-h-[96px] xl:max-h-[105px] [&_svg]:w-auto [&_svg]:h-full'>
            {iconType && <AtipyIcon type={iconType} />}
          </div>
        )}

        {urlHeaderImg && (
          <div className='max-w-[118px] md:max-w-none md:max-h-[80px] lg:max-h-[96px] xl:max-h-[100px]'>
            <img
              src={urlHeaderImg}
              alt=''
              className='block h-full w-auto object-contain'
            />
          </div>
        )}

        <h3 className='h3-card md:pb-8 text-center md:text-left'>
          {iconType && (
            <>
              {iconType === ATIPY_ICON.ABOUT ? (
                <>
                  Qui <br />
                  sommes-nous ?
                </>
              ) : (
                title
              )}
            </>
          )}
          {urlHeaderImg && title}
        </h3>
      </div>
      <MarkdownText
        className='text-body1 font-secondary text-center md:text-left'
        components={{
          code: ({ children }) => <span className='underline'>{children}</span>,
        }}
      >
        {text}
      </MarkdownText>

      <div className='flex justify-center md:justify-start w-full mt-auto pt-8 xl:pt-10 2xl:pt-4'>
        <Button
          icon
          onClick={onClick}
          className='!text-[16px] lg:!text-[18px] 2xl:!text-[20px] 3xl:!text-[25px] mx-auto sm:mx-[inherit]'
        >
          En savoir plus
        </Button>
      </div>
    </div>
  );
};
