import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { DigitalSections } from '@/components/sections/digital/DigitalSections';

import { getExpertiseDigitalPageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/digital`,
  },
  title: 'Digital',
};

export default function ExpertiseDigital() {
  const dataPage = getExpertiseDigitalPageData();

  return (
    <Page>
      <HeaderPage
        title={dataPage?.title ?? 'Digital'}
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: dataPage?.title ?? 'Digital',
          url: '/expertises/digital',
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
      {dataPage && <DigitalSections data={dataPage} />}
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
