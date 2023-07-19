import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';

// import { getExpertiseFormationPageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/digital`,
  },
  title: 'Expertise Formations',
};

export default function ExpertiseFormation() {
  // const dataPage = getExpertiseFormationPageData();

  return (
    <Page>
      <HeaderPage
        title='Conseils et formations'
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: 'Conseils et formations',
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
      <div>ok</div>
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
