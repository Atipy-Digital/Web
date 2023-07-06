import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/realisations`,
  },
  title: 'Realisations',
};

export default function Realisations() {
  return (
    <Page>
      <div>Realisations</div>
    </Page>
  );
}
