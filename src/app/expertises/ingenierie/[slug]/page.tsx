import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { SubPageSections } from '@/components/sections/sub-page/SubPageSections';

import {
  getExpertiseIngenierieSubPageBySlug,
  getExpertiseIngenierieSubPageMetaData,
  getExpertiseIngenierieSubPageNextLink,
  getExpertiseIngenierieSubPageSlugs,
} from '@/services/expertise.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const meta = getExpertiseIngenierieSubPageMetaData(slug);
  const previousKeywords = (await parent).keywords || [];
  if (!meta) {
    return {
      alternates: {
        canonical: `${siteOrigin}/expertises/ingenierie/${slug}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/expertises/ingenierie/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getExpertiseIngenierieSubPageSlugs();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function IngenierieSubPage({ params: { slug } }: Props) {
  const subPage = getExpertiseIngenierieSubPageBySlug(slug);
  const nextLink = getExpertiseIngenierieSubPageNextLink(slug);

  if (!subPage) {
    notFound();
  }

  return (
    <Page>
      <HeaderPage
        title={subPage.title}
        links={[
          {
            label: 'Nos expertises',
            url: '/expertises',
          },
          {
            label: 'Ingénierie',
            url: '/expertises/ingenierie',
          },
        ]}
        currentLink={{
          label: subPage.title,
          url: `/expertises/ingenierie/${subPage.slug}`,
        }}
        prevLink={{
          label: 'Ingénierie',
          url: '/expertises/ingenierie',
        }}
        nextLink={
          nextLink || {
            label: 'Conseils et formations',
            url: '/expertises/formation',
          }
        }
        boxClassName='!mb-0'
      />
      <SubPageSections data={subPage} type='ingenierie' />
      <BottomNav
        previousLink={{
          label: 'Ingénierie',
          url: '/expertises/ingenierie',
        }}
        nextLink={
          nextLink || {
            label: 'Conseils et formations',
            url: '/expertises/formation',
          }
        }
      />
    </Page>
  );
}
