import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { Sections } from '@/components/sections/agence/conception/Sections';

import { getConceptionData } from '@/services/conception.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence/conception`,
  },
  title: 'La conception universelle',
};

export default function ConceptionPage() {
  const dataPage = getConceptionData();

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
          label: 'La Tribu',
          url: '/agence/tribu',
        }}
        intro={dataPage?.intro}
      />
      {dataPage?.sections && <Sections sections={dataPage.sections} />}
      <BottomNav
        previousLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'La Tribu',
          url: '/agence/tribu',
        }}
      />
    </Page>
  );
}
