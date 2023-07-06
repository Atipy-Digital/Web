import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/contact`,
  },
  title: 'Contact',
};

export default function Contact() {
  return <div>Contact</div>;
}
