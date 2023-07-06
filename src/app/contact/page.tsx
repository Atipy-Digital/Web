import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/contact`,
  },
  title: 'Contact',
};

export default function Contact() {
  return (
    <div>
      <h1>TEst de font</h1>
      <h2>TEst de font</h2>
    </div>
  );
}
