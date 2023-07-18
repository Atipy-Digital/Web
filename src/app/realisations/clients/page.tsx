import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { Sections } from '@/components/sections/clients/Sections';

import { getClientPage } from '@/services/client.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/realisations/clients`,
  },
  title: 'Nos clients',
};

export default function ClientPage() {
  const dataPage = getClientPage();

  return (
    <Page>
      <HeaderPage
        title='Nos clients'
        links={[
          {
            label: 'Nos Réalisations',
            url: '/realisations',
          },
        ]}
        currentLink={{
          label: 'Nos clients',
          url: '/realisations/clients`',
        }}
        prevLink={{
          label: 'Nos Réalisations',
          url: '/realisations',
        }}
        intro={dataPage?.intro}
      />
      {dataPage?.sections && <Sections sections={dataPage.sections} />}
      <BottomNav
        previousLink={{
          label: 'Nos Réalisations',
          url: '/realisations',
        }}
      />
    </Page>
  );
}
