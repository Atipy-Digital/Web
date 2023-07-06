import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence`,
  },
  title: "L'agence",
};

export default function Agency() {
  return <div>Agency</div>;
}
