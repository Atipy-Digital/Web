import { Metadata, ResolvingMetadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { Page } from '@/components/layout/Page';
import { AllProjects } from '@/components/sections/projects/AllProjects';
import { ProjectsHeader } from '@/components/sections/projects/Header';
import { ProjectsFeatured } from '@/components/sections/projects/ProjectsFeatured';

import {
  getProjectsMetadata,
  getProjectsPageData,
} from '@/services/project.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  _: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const meta = getProjectsMetadata();
  const previousKeywords = (await parent).keywords || [];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/realisations`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export default function Realisations() {
  const data = getProjectsPageData();

  return (
    <Page>
      <ProjectsHeader title={data.title} intro={data.intro} />
      <ProjectsFeatured data={data.projectsFeatured} />
      <AllProjects />
    </Page>
  );
}
