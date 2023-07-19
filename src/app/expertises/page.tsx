import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { ExpertiseCards } from '@/components/sections/expertises/ExpertiseCards';

import { getExpertisePageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises`,
  },
  title: 'Nos expertises',
};

export default function Expertises() {
  const dataPage = getExpertisePageData();

  return (
    <Page>
      <HeaderPage
        title='Nos expertises'
        currentLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        boxClassName='!mb-0'
      />
      {dataPage && <ExpertiseCards data={dataPage} />}
    </Page>
  );
}
