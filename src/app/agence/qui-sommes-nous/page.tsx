import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { AboutSection } from '@/components/sections/agence/about/Section';

import { getAboutData } from '@/services/about.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence/about`,
  },
  title: 'Qui sommes-nous ?',
};

export default function About() {
  const aboutData = getAboutData();

  return (
    <Page>
      <HeaderPage
        title='Qui sommes-nous ?'
        links={[
          {
            label: "L'agence",
            url: '/agence',
          },
        ]}
        currentLink={{
          label: 'Qui sommes-nous ?',
          url: '/agence/about',
        }}
        prevLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'La conception universelle',
          url: '/agence/conception',
        }}
      />
      {aboutData && <AboutSection data={aboutData} />}

      <BottomNav
        previousLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'La conception universelle',
          url: '/agence/conception',
        }}
      />
    </Page>
  );
}
