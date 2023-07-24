import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { SubPageSections } from '@/components/sections/sub-page/SubPageSections';

import {
  getExpertiseDigitalSubPageBySlug,
  getExpertiseDigitalSubPageMetaData,
  getExpertiseDigitalSubPageNextLink,
  getExpertiseDigitalSubPageSlugs,
} from '@/services/expertise.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const meta = getExpertiseDigitalSubPageMetaData(slug);
  const previousKeywords = (await parent).keywords || [];
  if (!meta) {
    return {
      alternates: {
        canonical: `${siteOrigin}/expertises/digital/${slug}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/expertises/digital/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getExpertiseDigitalSubPageSlugs();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function DigitalSubPage({ params: { slug } }: Props) {
  const subPage = getExpertiseDigitalSubPageBySlug(slug);
  const nextLink = getExpertiseDigitalSubPageNextLink(slug);

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
            label: 'Digital',
            url: '/expertises/digital',
          },
        ]}
        currentLink={{
          label: subPage.title,
          url: `/expertises/digital/${subPage.slug}`,
        }}
        prevLink={{
          label: 'Digital',
          url: '/expertises/digital',
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
          label: 'Digital',
          url: '/expertises/digital',
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
