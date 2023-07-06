import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises`,
  },
  title: 'Expertises',
};

export default function Expertises() {
  return <div>Expertises</div>;
}
