'use client';

import { Button } from './Button';
import { MarkdownText } from './MarkdownText';
import { ATIPY_ICON, AtipyIcon } from '../common/icons/AtipyIcon';

type Props = {
  iconType: ATIPY_ICON;
  title: string;
  text: string;
  onClick: () => void;
};

export const CardPage = ({ iconType, onClick, text, title }: Props) => {
  return (
    <div className='w-full px-4 py-8 md:p-8 xl:p-10  2xl:p-14 3xl:p-16 flex flex-col 2xl:min-h-[675px]'>
      <div className='w-full flex flex-row gap-8 md:flex-col'>
        <div className='max-h-[80px] xl:max-h-[105px] [&_svg]:w-auto [&_svg]:h-full'>
          <AtipyIcon type={iconType} />
        </div>
        <h3 className='h3-card py-8'>
          {iconType === ATIPY_ICON.ABOUT ? (
            <>
              Qui <br />
              sommes-nous ?
            </>
          ) : (
            title
          )}
        </h3>
      </div>
      <MarkdownText className='text-body1 font-secondary text-center sm:text-left'>
        {text}
      </MarkdownText>

      <div className='flex w-full mt-auto pt-6 lg:pt-8 xl:pt-10 2xl:pt-4'>
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
