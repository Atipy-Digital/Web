import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence`,
  },
  title: "L'agence",
};

export default function Agence() {
  return (
    <Page>
      <div>Agence</div>
    </Page>
  );
}
