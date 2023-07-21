import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { FormationSections } from '@/components/sections/formation/FormationSections';

import { getExpertiseFormationPageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/formation`,
  },
  title: 'Conseils et formations',
};

export default function ExpertiseFormation() {
  const dataPage = getExpertiseFormationPageData();

  return (
    <Page>
      <HeaderPage
        title={dataPage?.title ?? 'Conseils et formations'}
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: dataPage?.title ?? 'Conseils et formations',
          url: '/expertises/formation',
        }}
        prevLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Ingénierie',
          url: '/expertises/ingenierie',
        }}
        boxClassName='!mb-0'
      />
      {dataPage && <FormationSections data={dataPage} />}
      <BottomNav
        previousLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Ingénierie',
          url: '/expertises/ingenierie',
        }}
      />
    </Page>
  );
}
