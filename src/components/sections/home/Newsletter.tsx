'use client';

import { useForm } from 'react-hook-form';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import clsxm from '@/lib/clsxm';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';

import type { HomeNewsletterDataType } from '@/ts';

type Input = {
  email: string;
};

type Props = {
  data: HomeNewsletterDataType;
};

export const Newsletter = ({ data }: Props) => {
  const { handleSubmit, register } = useForm<Input>();

  const rules = {
    email: register('email', {
      required: 'Entrez votre email',
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Entrez un email valide',
      },
    }),
  };

  const onSubmit = handleSubmit((data) => {
    console.warn(data);
  });

  return (
    <section className='w-full bg-a-yellow text-black'>
      <Box className='max-w-[1920px]'>
        <div className='tl py-fluid relative w-full flex items-center md:items-start lg:items-end flex-col lg:flex-row'>
          <div className='tl lg:w-fit md:max-w-[596px] lg:max-w-[700px] flex-grow text-center md:text-left flex-shrink-0'>
            <h3 className='leading-tight'>
              <ReactMarkdown>{data.title}</ReactMarkdown>
            </h3>
            <h4 className='mt-6'>{data.subtitle}</h4>
          </div>

          <div className='tl flex-grow flex items-center justify-center flex-col md:flex-row mt-8 lg:mt-0 w-full lg:w-auto'>
            <form
              className='tl relative z-[1] w-full flex items-center justify-between rounded-full bg-white text-black'
              onSubmit={onSubmit}
            >
              <input
                type='text'
                className={clsxm(
                  'tl h-[54px] w-full appearance-none border-none p-4 bg-white text-black text-[16px] lg:text-[25px] rounded-full',
                  'focus:!border-white focus:ring-0 active:decoration-0 active:ring-0'
                )}
                placeholder={data.placeholder}
                {...rules.email}
              />
              <Button
                type='submit'
                icon
                className='dark:text-white dark:bg-black hover:dark:border-black text-[16px] md:text-[20px] lg:text-[25px] [&_svg]:!mr-3 md:[&_svg]:mr-5 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-8 md:[&_svg]:h-8'
                noAnim
              >
                {data.button.label}
              </Button>
            </form>
            <div className='tl absolute top-0 bottom-0 -right-[40vw] md:-right-[30vw] hidden md:block lg:right-[inherit]'>
              <img
                src='/imgs/home/newsletter-bg.webp'
                alt='background newsletter'
                className='h-full w-auto object-contain'
              />

              <img
                src='/imgs/home/newsletter-icon.webp'
                alt='newsletter icon'
                className='tl absolute hidden lg:block md:w-28 xl:w-36 2xl:w-40 z-[1] top-10 md:top-7 2xl:top-10 -left-[58px] md:-left-[38px] xl:-left-[62px] 2xl:-left-[86px]'
              />
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};
