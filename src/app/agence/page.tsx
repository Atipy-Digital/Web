import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { AgenceCards } from '@/components/sections/agence/AgenceCards';

import { getAgenceData } from '@/services/agence.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence`,
  },
  title: "L'agence",
};

export default function Agence() {
  const dataPage = getAgenceData();

  return (
    <Page>
      <HeaderPage
        title="L'agence"
        currentLink={{
          label: "L'agence",
          url: '/agence',
        }}
        boxClassName='!mb-0'
      />
      {dataPage && <AgenceCards data={dataPage} />}
    </Page>
  );
}
