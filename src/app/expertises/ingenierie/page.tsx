import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { IngenierieSections } from '@/components/sections/ingenierie/IngenierieSections';

import { getExpertiseIngenieriePageData } from '@/services/expertise.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/expertises/ingenierie`,
  },
  title: 'Ingénierie',
};

export default function ExpertiseEngeneer() {
  const dataPage = getExpertiseIngenieriePageData();

  return (
    <Page>
      <HeaderPage
        title={dataPage?.title ?? 'Ingénierie'}
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
        ]}
        currentLink={{
          label: dataPage?.title ?? 'Ingénierie',
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
      {dataPage && <IngenierieSections data={dataPage} />}
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
