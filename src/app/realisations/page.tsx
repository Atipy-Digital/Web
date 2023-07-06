import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/realisations`,
  },
  title: 'Realisations',
};

export default function Realisations() {
  return <div>Realisations</div>;
}
