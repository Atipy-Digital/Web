import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';

const SitemapListWithNoSSR = dynamic(
  () => import('../../components/layout/footer/SitemapList'),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/sitemap`,
  },
  title: 'Plan du site',
};

export default function Sitemap() {
  return (
    <Page>
      <HeaderPage
        title='Plan du site'
        currentLink={{
          label: 'Sitemap',
          url: 'Sitemap',
        }}
      />
      <SitemapListWithNoSSR />
    </Page>
  );
}
