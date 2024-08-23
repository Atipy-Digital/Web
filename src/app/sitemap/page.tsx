import { Metadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import SitemapCategories from '@/components/sections/sitemap/Sitemap';

import { getSitemapData } from '@/services/sitemap.service';

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteOrigin}/sitemap`,
  },
  title: 'Plan du site',
};

export default function Sitemap() {
  const siteMapData = getSitemapData();
  return (
    <Page>
      <HeaderPage
        title='Plan du site'
        currentLink={{
          label: 'Plan du site',
          url: 'Sitemap',
        }}
      />
      {siteMapData ? (
        <SitemapCategories data={siteMapData} />
      ) : (
        <p>Données du plan du site non disponibles.</p>
      )}
    </Page>
  );
}
