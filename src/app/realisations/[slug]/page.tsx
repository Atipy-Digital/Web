import { Metadata, ResolvingMetadata } from 'next';

import { siteOrigin } from '@/lib/constants';

import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { ProjectIntro } from '@/components/sections/project/Intro';
import { ProjectSections } from '@/components/sections/project/Sections';

import {
  getProjectBySlug,
  getProjectMetaData,
  getProjectsSlug,
} from '@/services/project.service';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const meta = getProjectMetaData(slug);
  const previousKeywords = (await parent).keywords || [];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta?.keywords?.length ? meta.keywords : previousKeywords,
    alternates: {
      canonical: `${siteOrigin}/posts/${slug}`,
    },
    openGraph: {
      images: meta?.ogImg ?? 'favicon/og-alt.png',
    },
  };
}

export async function generateStaticParams() {
  return getProjectsSlug().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params: { slug } }: Props) {
  const project = getProjectBySlug(slug);

  return (
    <Page>
      <HeaderPage
        title={project.title}
        links={[{ label: 'Nos réalisations', url: '/realisations' }]}
        currentLink={{
          label: project.title,
          url: `/realisations/${slug}`,
        }}
      />
      <ProjectIntro
        image={project.image}
        client={project.client}
        context_body={project.context_body}
        mission_body={project.mission_body}
        tags={project.tags}
      />
      <ProjectSections data={project.project_sections} />
    </Page>
  );
}
