import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { MobilitesSections } from '@/components/sections/mobilites/MobilitesSections';

import { getExpertiseMobilitesPageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/mobilites`,
  },
  title: 'Mobilités',
};

export default function ExpertiseMobilites() {
  const dataPage = getExpertiseMobilitesPageData();

  return (
    <Page>
      <HeaderPage
        title={dataPage?.title ?? 'Mobilites'}
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: dataPage?.title ?? 'Mobilites',
          url: '/expertises/mobilites',
        }}
        prevLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Conseils et formations',
          url: '/expertises/formation',
        }}
        boxClassName='!mb-0'
      />
      {dataPage && <MobilitesSections data={dataPage} />}
      <BottomNav
        previousLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Conseils et formations',
          url: '/expertises/formation',
        }}
      />
    </Page>
  );
}
