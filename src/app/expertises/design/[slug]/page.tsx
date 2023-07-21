import { ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { SubPageSections } from '@/components/sections/sub-page/SubPageSections';

import {
  getExpertiseDesignSubPageBySlug,
  getExpertiseDesignSubPageMetaData,
  getExpertiseDesignSubPageNextLink,
  getExpertiseDesignSubPageSlugs,
} from '@/services/expertise.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
) {
  const { slug } = params;
  const meta = getExpertiseDesignSubPageMetaData(slug);
  const previousKeywords = (await parent).keywords || [];
  if (!meta) {
    return {
      alternates: {
        canonical: `${siteOrigin}/expertises/design/${slug}`,
      },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/expertises/design/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export async function generateStaticParams() {
  const slugs = getExpertiseDesignSubPageSlugs();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function DesignSubPage({ params: { slug } }: Props) {
  const subPage = getExpertiseDesignSubPageBySlug(slug);
  const nextLink = getExpertiseDesignSubPageNextLink(slug);

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
            label: 'Design',
            url: '/expertises/design',
          },
        ]}
        currentLink={{
          label: subPage.title,
          url: `/expertises/design/${subPage.slug}`,
        }}
        prevLink={{
          label: 'Design',
          url: '/expertises/design',
        }}
        nextLink={
          nextLink || {
            label: 'Conseils et formations',
            url: '/expertises/formation',
          }
        }
        boxClassName='!mb-0'
      />
      <SubPageSections data={subPage} type='design' />
      <BottomNav
        previousLink={{
          label: 'Design',
          url: '/expertises/design',
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
