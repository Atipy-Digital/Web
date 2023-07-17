import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { PartnerList } from '@/components/sections/agence/partners/PartnerList';

import { getPartnerPageData } from '@/services/partner.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/agence/partenaires`,
  },
  title: 'Nos partenaires',
};

export default function PartnerPage() {
  const pageData = getPartnerPageData();

  return (
    <Page>
      <HeaderPage
        title='Nos partenaires'
        links={[
          {
            label: "L'agence",
            url: '/agence',
          },
        ]}
        currentLink={{
          label: 'Nos partenaires',
          url: '/agence/partners',
        }}
        intro={pageData?.intro}
        prevLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'Qui sommes-nous ?',
          url: '/agence/about',
        }}
      />
      {pageData?.partners && <PartnerList data={pageData.partners} />}
      <BottomNav
        previousLink={{
          label: "L'agence",
          url: '/agence',
        }}
        nextLink={{
          label: 'Qui sommes-nous ?',
          url: '/agence/about',
        }}
      />
    </Page>
  );
}
