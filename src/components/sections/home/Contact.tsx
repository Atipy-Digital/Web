'use client';

import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

import { Box } from '@/components/common/Box';
import { ATIPY_ICON, AtipyIcon } from '@/components/common/icons/AtipyIcon';
import { Button } from '@/components/primitives/Button';

import type { HomeContactDataType } from '@/ts';

type Props = {
  data: HomeContactDataType;
};

export const Contact = ({ data }: Props) => {
  const { push } = useRouter();
  const redirectToContact = () => {
    push('/contact');
  };
  return (
    <Box
      as='section'
      className='tl mb-10 md:mb-0 !py-10 lg:!py-12 xl:!py-16 2xl:!py-28'
    >
      <div className='tl flex flex-col md:flex-row justify-center md:justify-between lg:justify-center items-center sm:px-fluid sm:py-fluid relative w-full lg:gap-x-16 xl:gap-x-20 2xl:gap-x-24'>
        <h3 className='flex-shrink-0 md:max-w-[50vw] 2xl:max-w-[566px] leading-tight mb-8 md:mb-0'>
          <ReactMarkdown>{data.title}</ReactMarkdown>
        </h3>

        <div className='w-full sm:w-auto flex flex-col justify-center items-center md:justify-start md:items-start'>
          <Button icon onClick={redirectToContact}>
            Formulaire de contact
          </Button>
          <div className='tl w-full h-[2px] my-4' />
          <div className='flex items-center gap-x-8'>
            <AtipyIcon
              type={ATIPY_ICON.ENVELOP}
              className='w-[48px] h-[35px] flex-shrink-0'
            />
            <a
              href={`mailto:${data.email}`}
              className='link-hover text-body1 leading-none font-secondary font-normal'
            >
              {data.email}
            </a>
          </div>
        </div>
      </div>
    </Box>
  );
};
