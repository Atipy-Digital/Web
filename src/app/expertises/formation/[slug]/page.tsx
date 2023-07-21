import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { SubPageSections } from '@/components/sections/sub-page/SubPageSections';

import {
  getExpertiseFormationSubPageBySlug,
  getExpertiseFormationSubPageMetaData,
  getExpertiseFormationSubPageNextLink,
  getExpertiseFormationSubPageSlugs,
} from '@/services/expertise.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const meta = getExpertiseFormationSubPageMetaData(slug);
  const previousKeywords = (await parent).keywords || [];
  if (!meta) {
    return {
      alternates: {
        canonical: `${siteOrigin}/expertises/formation/${slug}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/expertises/formation/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getExpertiseFormationSubPageSlugs();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function FormationSubPage({ params: { slug } }: Props) {
  const subPage = getExpertiseFormationSubPageBySlug(slug);
  const nextLink = getExpertiseFormationSubPageNextLink(slug);

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
            label: 'Conseils et formations',
            url: '/expertises/formation',
          },
        ]}
        currentLink={{
          label: subPage.title,
          url: `/expertises/formation/${subPage.slug}`,
        }}
        prevLink={{
          label: 'Conseils et formations',
          url: '/expertises/formation',
        }}
        nextLink={nextLink}
        boxClassName='!mb-0'
      />
      <SubPageSections data={subPage} type='formation' />
      <BottomNav
        previousLink={{
          label: 'Conseils et formations',
          url: '/expertises/formation',
        }}
        nextLink={nextLink}
      />
    </Page>
  );
}
