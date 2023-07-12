import { MetadataRoute } from 'next';

import { siteOrigin } from '@/lib/constants';

import { getPostsSlug } from '@/services/post.service';
import { getProjectsSlug } from '@/services/project.service';

const ROUTES = ['agence', 'contact', 'expertises', 'realisations'];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugPosts = getPostsSlug();
  const slugProjects = getProjectsSlug();

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
    ...slugProjects.map((slug) => ({
      url: `${siteOrigin}/realisations/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
