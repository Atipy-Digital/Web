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
    <section className='w-full bg-a-yellow-dark text-black lg:py-4'>
      {/* <Box>
        <div className='tl py-fluid relative w-full flex lg:items-end flex-col lg:gap-x-4 xl:gap-x-10 1xl:gap-x-14'>
          <div className='tl lg:w-fit text-left flex-shrink-0'>
            <h3 className='leading-tight'>
              <ReactMarkdown>{data.title}</ReactMarkdown>
            </h3>
            <h4 className='mt-6'>{data.subtitle}</h4>
          </div>

          <div className='tl flex-grow flex items-center justify-center flex-col mt-8 lg:mt-0 w-full lg:w-auto'>
            <div className='w-full mr-auto lg:max-w-3xl desktop:max-w-4xl'>
              <label
                htmlFor='newsletter-input'
                className='block text-body1 mb-2 font-secondary leading-none'
              >
                {data.placeholder}
              </label>
              <form
                className='tl relative z-[1] w-full flex items-center justify-between rounded-[6px] rounded-tr-[26px] rounded-br-[26px] bg-white text-black'
                onSubmit={onSubmit}
              >
                <input
                  id='newsletter-input'
                  type='text'
                  className={clsxm(
                    'tl h-[54px] w-full appearance-none border-none p-4 bg-white text-black text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] rounded-[6px]',
                    'focus:!border-white focus:ring-0 active:decoration-0 active:ring-0'
                  )}
                  {...rules.email}
                />
                <Button
                  type='submit'
                  icon
                  className='dark:text-white dark:bg-background hover:dark:border-black hover:dark:bg-white hover:dark:text-black [&_svg]:!mr-3 md:[&_svg]:mr-5 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-8 md:[&_svg]:h-8'
                  noAnim
                >
                  {data.button.label}
                </Button>
              </form>
            </div>
            <div className='tl absolute top-0 bottom-0 right-0 hidden md:block max-w-[320px] lg:max-w-[395px]'>
              <img
                src='/imgs/home/newsletter-home.webp'
                alt='background newsletter'
                className='h-full w-auto object-contain'
              />
            </div>
          </div>
        </div>
      </Box> */}

      <Box className='flex items-center'>
        <div className='w-full sm:px-fluid py-fluid'>
          <h3 className='leading-tight'>
            <ReactMarkdown>{data.title}</ReactMarkdown>
          </h3>
          <h4 className='my-6'>{data.subtitle}</h4>
          <form
            className='tl relative z-[1] w-full flex items-center justify-between rounded-[6px] rounded-tr-[26px] rounded-br-[26px] bg-white text-black'
            onSubmit={onSubmit}
          >
            <input
              id='newsletter-input'
              type='text'
              className={clsxm(
                'tl h-[54px] w-full appearance-none border-none p-4 bg-white text-black text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] rounded-[6px]',
                'focus:!border-white focus:ring-0 active:decoration-0 active:ring-0'
              )}
              {...rules.email}
              placeholder={data.placeholder}
            />
            <Button
              type='submit'
              icon
              className='hidden xxs:flex dark:text-white dark:bg-background hover:dark:border-black hover:dark:bg-white hover:dark:text-black [&_svg]:!mr-3 md:[&_svg]:mr-5 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-8 md:[&_svg]:h-8'
              noAnim
            >
              {data.button.label}
            </Button>
          </form>

          <Button
            type='button'
            icon
            className='mt-4 ml-auto flex xxs:hidden dark:text-white dark:bg-background hover:dark:border-black hover:dark:bg-white hover:dark:text-black [&_svg]:!mr-3 md:[&_svg]:mr-5 [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-8 md:[&_svg]:h-8'
            noAnim
            onClick={onSubmit}
          >
            {data.button.label}
          </Button>
        </div>

        <div className='hidden md:block max-w-[288px] lg:max-w-[395px] flex-shrink-0'>
          <img
            src='/imgs/home/newsletter-home.webp'
            alt='background newsletter'
            className='h-full w-auto object-contain'
          />
        </div>
      </Box>
    </section>
  );
};
