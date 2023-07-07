import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/contact`,
  },
  title: 'Contact',
};

export default function Contact() {
  return (
    <Page>
      <div>Contact</div>
    </Page>
  );
}
