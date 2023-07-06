import { MetadataRoute } from 'next';

import { siteOrigin } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
