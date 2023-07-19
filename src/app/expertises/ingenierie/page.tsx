import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';

// import { getExpertiseEngineerPageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/ingenierie`,
  },
  title: 'Expertise Ingenierie',
};

export default function ExpertiseEngeneer() {
  // const dataPage = getExpertiseEngineerPageData();

  return (
    <Page>
      <HeaderPage
        title='Ingénierie'
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: 'Ingénierie',
          url: '/expertises/ingenierie',
        }}
        prevLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Design',
          url: '/expertises/design',
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
          label: 'Design',
          url: '/expertises/design',
        }}
      />
    </Page>
  );
}
