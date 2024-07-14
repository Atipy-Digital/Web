'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { toast, ToastContainer } from 'react-toastify';

import clsxm from '@/lib/clsxm';
import { URL_NETLIFY_SUBSCRIBE } from '@/lib/constants';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';

import { AudienceTag } from '../../primitives/AudienceTag';

import type { HomeNewsletterDataType } from '@/ts';

type Inputs = {
  email: string;
  selectedOptions: {
    Digital: boolean;
    Ingénierie: boolean;
    Design: boolean;
  };
};

type Props = {
  data: HomeNewsletterDataType;
};

export const Newsletter = ({ data }: Props) => {
  const { handleSubmit, register, reset, setValue, watch } = useForm<Inputs>({
    defaultValues: {
      email: '',
      selectedOptions: {
        Digital: true,
        Ingénierie: true,
        Design: true,
      },
    },
    mode: 'onChange',
  });

  const watchedValues = watch();

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

  const onSubmit = handleSubmit(async (data: Inputs) => {
    const selectedOptions = watchedValues.selectedOptions;
    const selectedOptionsArray: string[] = [];

    if (data.selectedOptions.Digital) {
      selectedOptionsArray.push('Digital');
    }
    if (data.selectedOptions.Ingénierie) {
      selectedOptionsArray.push('Ingénierie');
    }
    if (data.selectedOptions.Design) {
      selectedOptionsArray.push('Design');
    }

    if (selectedOptionsArray.length === 0) {
      toast.error('Sélectionnez au moins une option');
      return;
    }

    try {
      const response = await axios.post(URL_NETLIFY_SUBSCRIBE, {
        email: data.email,
        selectedOptions,
      });

      if (response.status === 201) {
        toast.success('Inscription réussie !');
        reset();
      } else if (response.status === 406) {
        toast.warning("L'adresse email est déjà inscrite à la newsletter.");
        reset();
      }
    } catch (error) {
      toast.error("Une erreur s'est produite lors de l'inscription.");
      console.error(error);
      reset();
    }
  });

  const handleOptionChange = (option: string, value: boolean) => {
    setValue(
      `selectedOptions.${option}` as
        | 'selectedOptions.Design'
        | 'selectedOptions.Digital'
        | 'selectedOptions.Ingénierie',
      value
    );
  };
  return (
    <>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <section className='w-full bg-a-yellow-dark text-black lg:py-4'>
        <Box className='flex items-center'>
          <div className='w-full sm:px-fluid py-fluid'>
            <h3 className='leading-tight'>
              <ReactMarkdown>{data.title}</ReactMarkdown>
            </h3>
            <h4 className='mt-6 mb-'>{data.subtitle}</h4>
            <p className='mb-2'>
              Choisissez au moins un thème pour recevoir notre newsletter
            </p>
            <div className='flex-grow flex items-center gap-2 lg:gap-3 flex-wrap mb-6'>
              {Object.entries(watchedValues.selectedOptions).map(
                ([label, isActive], index) => (
                  <div key={index} className='flex items-center gap-2 lg:gap-3'>
                    <AudienceTag
                      label={label as 'Digital' | 'Ingénierie' | 'Design'}
                      isActive={isActive}
                      onChange={(isChecked: boolean) =>
                        handleOptionChange(label, isChecked)
                      }
                    />
                  </div>
                )
              )}
            </div>
            <form
              className='tl relative z-[1] w-full flex items-center justify-between rounded-[6px] rounded-tr-[26px] rounded-br-[26px] bg-white text-black'
              onSubmit={onSubmit}
            >
              <label htmlFor='newsletter-input' className='sr-only'>
                Email
              </label>
              <input
                id='newsletter-input'
                title='Email'
                autoComplete='email'
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
                aria-hidden={true}
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
              aria-hidden={true}
              src='/imgs/home/newsletter-home.webp'
              alt=''
              className='h-full w-auto object-contain'
            />
          </div>
        </Box>
      </section>
    </>
  );
};
