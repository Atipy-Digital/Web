'use client';

import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import { SERVICE, TEMPLATE, USER } from '@/lib/constants';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';
import { InputController } from '@/components/primitives/Form/InputController';

import type { ContactFormType } from '@/ts';

type Inputs = {
  name: string;
  email: string;
  message: string;
  googleReCaptchaToken: string;
};

type Props = {
  data: ContactFormType;
};

export const ContactForm = ({ data }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      googleReCaptchaToken: '',
    },
    mode: 'onChange',
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = handleSubmit(async (data: Inputs) => {
    if (!executeRecaptcha) return;
    try {
      data.googleReCaptchaToken = await executeRecaptcha('submit');
      emailjs.send(SERVICE, TEMPLATE, data, USER).then(() => {
        reset();
        toast.success('Email envoyé !');
      });
    } catch {
      toast.error('Une erreur est survenue !');
    }
  });

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

      <Box className='max-w-2xl flex flex-col items-center justify-center'>
        <form className='w-full' onSubmit={onSubmit}>
          <span className='text-base leading-none my-1 w-full text-left'>
            * champs obligatoires
          </span>
          <InputController
            control={control}
            name='name'
            inputType='text'
            rules={{
              required: data.error_required,
            }}
            label={data.input_name.label}
            placeholder={data.input_name.placeholder}
            error={errors.name}
            autocomplete='name'
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'error_name' : undefined}
          />
          {errors.name && <span id='error_name'>{data.error_required}</span>}

          <InputController
            control={control}
            name='email'
            inputType='email'
            rules={{
              required: data.error_required,
            }}
            label={data.input_email.label}
            placeholder={data.input_email.placeholder}
            error={errors.email}
            autocomplete='email'
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'error_email' : undefined}
          />
          {errors.email && (
            <span id='error_email'>
              {data.error_required} Veuillez saisir une adresse e-mail valide.
              Par exemple mail@exemple.com.
            </span>
          )}

          <InputController
            control={control}
            name='message'
            inputType='area'
            rules={{
              required: data.error_required,
            }}
            label={data.input_message.label}
            placeholder={data.input_message.placeholder}
            error={errors.message}
            autocomplete='message'
          ></InputController>

          <Button
            disabled={!isValid}
            type='submit'
            className='mx-auto px-10 mt-10'
          >
            {data.button_text}
          </Button>
        </form>
      </Box>
    </>
  );
};
