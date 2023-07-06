import { MetadataRoute } from 'next';

import { siteOrigin } from '@/lib/constants';

import { getPostsSlug } from '@/services/post.service';

const ROUTES = ['agence', 'contact', 'expertises', 'realisations'];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugPosts = getPostsSlug();

  return [
    {
      url: siteOrigin,
      lastModified: new Date(),
    },
    ...ROUTES.map((route) => ({
      url: `${siteOrigin}/${route}`,
      lastModified: new Date(),
    })),
    ...slugPosts.map((slug) => ({
      url: `${siteOrigin}/post/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
