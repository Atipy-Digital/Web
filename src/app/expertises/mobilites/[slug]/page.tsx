import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { SubPageSections } from '@/components/sections/sub-page/SubPageSections';

import {
  getExpertiseMobilitesSubPageBySlug,
  getExpertiseMobilitesSubPageMetaData,
  getExpertiseMobilitesSubPageNextLink,
  getExpertiseMobilitesSubPageSlugs,
} from '@/services/expertise.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const meta = getExpertiseMobilitesSubPageMetaData(slug);
  const previousKeywords = (await parent).keywords || [];
  if (!meta) {
    return {
      alternates: {
        canonical: `${siteOrigin}/expertises/mobilites/${slug}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/expertises/mobilites/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getExpertiseMobilitesSubPageSlugs();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function MobilitesSubPage({ params: { slug } }: Props) {
  const subPage = getExpertiseMobilitesSubPageBySlug(slug);
  const nextLink = getExpertiseMobilitesSubPageNextLink(slug);

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
            label: 'Mobilités',
            url: '/expertises/mobilites',
          },
        ]}
        currentLink={{
          label: subPage.title,
          url: `/expertises/mobilites/${subPage.slug}`,
        }}
        prevLink={{
          label: 'Mobilités',
          url: '/expertises/mobilites',
        }}
        nextLink={
          nextLink || {
            label: 'Conseils et formations',
            url: '/expertises/formation',
          }
        }
        boxClassName='!mb-0'
      />
      <SubPageSections data={subPage} type='digital' />
      <BottomNav
        previousLink={{
          label: 'Mobilités',
          url: '/expertises/mobilites',
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
