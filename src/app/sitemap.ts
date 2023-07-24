import { MetadataRoute } from 'next';

import { siteOrigin } from '@/lib/constants';

import {
  getExpertiseDesignSubPageSlugs,
  getExpertiseDigitalSubPageSlugs,
  getExpertiseFormationSubPageSlugs,
  getExpertiseIngenierieSubPageSlugs,
} from '@/services/expertise.service';
import { getPostsSlug } from '@/services/post.service';
import { getProjectsSlug } from '@/services/project.service';

const ROUTES = [
  'agence',
  'agence/about',
  'agence/conception',
  'agence/partners',
  'agence/tribu',
  'contact',
  'expertises',
  'expertises/design',
  'expertises/digital',
  'expertises/formation',
  'expertises/ingenierie',
  'posts',
  'realisations',
  'realisations/clients',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const slugPosts = getPostsSlug();
  const slugProjects = getProjectsSlug();
  const slugExpertiseDesigns = getExpertiseDesignSubPageSlugs();
  const slugExpertiseFormations = getExpertiseFormationSubPageSlugs();
  const slugExpertiseDigitals = getExpertiseDigitalSubPageSlugs();
  const slugExpertiseIngenieries = getExpertiseIngenierieSubPageSlugs();

  return [
    {
      url: siteOrigin,
      lastModified: new Date(),
    },
    ...ROUTES.map((route) => ({
      url: `${siteOrigin}/${route}`,
      lastModified: new Date(),
    })),
    ...(slugPosts?.length
      ? slugPosts.map((slug) => ({
          url: `${siteOrigin}/post/${slug}`,
          lastModified: new Date(),
        }))
      : []),
    ...(slugProjects?.length
      ? slugProjects.map((slug) => ({
          url: `${siteOrigin}/realisations/${slug}`,
          lastModified: new Date(),
        }))
      : []),
    ...(slugExpertiseDesigns?.length
      ? slugExpertiseDesigns.map((slug) => ({
          url: `${siteOrigin}/expertises/design/${slug}`,
          lastModified: new Date(),
        }))
      : []),
    ...(slugExpertiseFormations?.length
      ? slugExpertiseFormations.map((slug) => ({
          url: `${siteOrigin}/expertises/formation/${slug}`,
          lastModified: new Date(),
        }))
      : []),
    ...(slugExpertiseDigitals?.length
      ? slugExpertiseDigitals.map((slug) => ({
          url: `${siteOrigin}/expertises/digital/${slug}`,
          lastModified: new Date(),
        }))
      : []),
    ...(slugExpertiseIngenieries?.length
      ? slugExpertiseIngenieries.map((slug) => ({
          url: `${siteOrigin}/expertises/ingenierie/${slug}`,
          lastModified: new Date(),
        }))
      : []),
  ];
}
