import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { ContactFooter } from '@/components/sections/contact/Footer';
import { ContactForm } from '@/components/sections/contact/Form';
import {ContactProvider} from "@/components/sections/contact/WrapperContact";

import { getContactData } from '@/services/contact.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/contact`,
  },
  title: 'Contact',
};

export default function Contact() {
  const contactData = getContactData();

  return (
    <Page>
      <HeaderPage
        title={contactData?.title || 'Contact'}
        currentLink={{
          label: 'Contact',
          url: 'contact',
        }}
      />
      {contactData && (
        <>
          <ContactProvider>
            <ContactForm data={contactData.form} />
          </ContactProvider>
          <ContactFooter
            socials={contactData.socials}
            infos={contactData.infos}
          />
        </>
      )}
    </Page>
  );
}
