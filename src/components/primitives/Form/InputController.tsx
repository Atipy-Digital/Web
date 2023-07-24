'use client';

import { HTMLInputTypeAttribute, ReactNode } from 'react';
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import clsxm from '@/lib/clsxm';

interface FormInputControllerProps<FieldsType extends FieldValues> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<FieldsType>;
}

interface Props<FieldsType extends FieldValues>
  extends FormInputControllerProps<FieldsType> {
  label?: string;
  placeholder?: string;
  inputType: HTMLInputTypeAttribute;
  containerClassName?: string;
  inputClassName?: string;
  children?: ReactNode;
}

export const InputController = <FieldsType extends FieldValues>({
  error,
  rules,
  label,
  control,
  name,
  placeholder,
  inputType,
  containerClassName,
  inputClassName,
  children,
}: Props<FieldsType>) => {
  const isInvalid = error != null;

  return (
    <div className={clsxm('flex flex-col gap-1 mb-6', containerClassName)}>
      {label != null && (
        <label htmlFor={`input-${name}`} className='text-body1'>
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            {inputType === 'area' ? (
              <textarea
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                id={`input-${name}`}
                className={clsxm(
                  'appearance-none focus:!border-offwhite-150 focus:ring-0 active:decoration-0 active:ring-0 transition-all duration-300',
                  'w-full rounded-md bg-grey-bg-form placeholder:text-grey-t-form text-[16px] placeholder:text-[16px]',
                  'lg:text-[18px] lg:placeholder:text-[18px]',
                  'p-3',
                  isInvalid
                    ? '!border border-a-red-dark dark:border-a-red-light'
                    : 'border-transparent dark:border-white',
                  'dark:bg-background',
                  inputClassName
                )}
                rows={6}
              />
            ) : (
              <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                id={`input-${name}`}
                className={clsxm(
                  'appearance-none focus:!border-offwhite-150 focus:ring-0 active:decoration-0 active:ring-0 transition-all duration-300',
                  'w-full rounded-md bg-grey-bg-form placeholder:text-grey-t-form text-[16px] placeholder:text-[16px]',
                  'lg:text-[18px] lg:placeholder:text-[18px]',
                  'p-3',
                  isInvalid
                    ? '!border border-a-red-dark dark:border-a-red-light'
                    : 'border-transparent dark:border-white',
                  'dark:bg-background',
                  inputClassName
                )}
              />
            )}
          </>
        )}
        rules={rules}
      />
      {isInvalid && (
        <span className='text-a-red-dark block pt-1 text-[14px] lg:text-[16px] font-secondary leading-none dark:text-a-red-light'>
          {error.message}
        </span>
      )}
      {children}
    </div>
  );
};
