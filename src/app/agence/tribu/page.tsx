import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { TribuSection } from '@/components/sections/agence/tribu/Section';

import { getTribuData } from '@/services/tribu.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence/tribu`,
  },
  title: 'La Tribu',
};

export default function TribuPage() {
  const pageData = getTribuData();

  return (
    <Page>
      <HeaderPage
        title='La Tribu'
        links={[
          {
            label: "L'agence",
            url: '/agence',
          },
        ]}
        currentLink={{
          label: 'La Tribu',
          url: '/agence/tribu',
        }}
        prevLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'Nos partenaires',
          url: '/agence/partenaires',
        }}
      />
      {pageData && <TribuSection data={pageData} />}
      <BottomNav
        previousLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'Nos partenaires',
          url: '/agence/partenaires',
        }}
      />
    </Page>
  );
}
