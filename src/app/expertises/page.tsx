import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises`,
  },
  title: 'Expertises',
};

export default function Expertises() {
  return (
    <Page>
      <div>Expertises</div>
    </Page>
  );
}
