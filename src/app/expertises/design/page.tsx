import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { DesignSections } from '@/components/sections/design/DesignSections';

import { getExpertiseDesignPageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/design`,
  },
  title: 'Design',
};

export default function ExpertiseDesign() {
  const dataPage = getExpertiseDesignPageData();

  return (
    <Page>
      <HeaderPage
        title={dataPage?.title || 'Design'}
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: dataPage?.title || 'Design',
          url: '/expertises/design',
        }}
        prevLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Digital',
          url: '/expertises/digital',
        }}
        boxClassName='!mb-0'
      />
      {dataPage && <DesignSections data={dataPage} />}
      <BottomNav
        previousLink={{
          label: 'Nos expertises',
          url: '/expertises',
        }}
        nextLink={{
          label: 'Digital',
          url: '/expertises/digital',
        }}
      />
    </Page>
  );
}
