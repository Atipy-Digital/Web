import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { ContactFooter } from '@/components/sections/contact/Footer';
import { ContactForm } from '@/components/sections/contact/Form';

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
        title={contactData.title}
        currentLink={{
          label: 'Contact',
          url: 'contact',
        }}
      />
      <ContactForm data={contactData.form} />
      <ContactFooter socials={contactData.socials} infos={contactData.infos} />
    </Page>
  );
}
