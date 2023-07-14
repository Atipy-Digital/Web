'use client';

import { useForm } from 'react-hook-form';

import { Box } from '@/components/common/Box';
import { Button } from '@/components/primitives/Button';
import { InputController } from '@/components/primitives/Form/InputController';

import type { ContactFormType } from '@/ts';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  data: ContactFormType;
};

export const ContactForm = ({ data }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.warn(data);
  });

  return (
    <Box className='max-w-2xl flex flex-col items-center justify-center'>
      <form className='w-full' onSubmit={onSubmit}>
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
        />
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
        />
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
        />

        <Button
          disabled={!isValid}
          type='submit'
          className='mx-auto bg-a-blue-dark text-white dark:bg-a-blue-light dark:text-black border-a-blue-dark dark:border-a-blue-light px-10 mt-10'
        >
          {data.button_text}
        </Button>
      </form>
    </Box>
  );
};
