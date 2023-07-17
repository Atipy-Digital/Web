import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence/conception`,
  },
  title: 'La conception universelle',
};

export default function ConceptionPage() {
  return (
    <Page>
      <HeaderPage
        title='La conception universelle'
        links={[
          {
            label: "L'agence",
            url: '/agence',
          },
        ]}
        currentLink={{
          label: 'La conception universelle',
          url: '/agence/conception',
        }}
        prevLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'Nos partenaires',
          url: '/agence/partners',
        }}
      />

      <BottomNav
        previousLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'Nos partenaires',
          url: '/agence/partners',
        }}
      />
    </Page>
  );
}
