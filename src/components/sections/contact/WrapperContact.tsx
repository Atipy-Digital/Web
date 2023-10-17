'use client';

import { ReactNode } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { RECHAPCHA_KEY } from '@/lib/constants';

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECHAPCHA_KEY} language='fr'>
      {children}
    </GoogleReCaptchaProvider>
  );
};
