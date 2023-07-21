import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { siteOrigin } from '@/lib/constants';

import { BottomNav } from '@/components/common/BottomNav';
import { HeaderPage } from '@/components/layout/HeaderPage';
import { Page } from '@/components/layout/Page';
import { Footer } from '@/components/sections/project/Footer';
import { ProjectIntro } from '@/components/sections/project/Intro';
import { ProjectSections } from '@/components/sections/project/Sections';
import { ProjectsFeatured } from '@/components/sections/projects/ProjectsFeatured';

import {
  getProjectBySlug,
  getProjectMetaData,
  getProjectNextLink,
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
  const slugs = getProjectsSlug();
  if (slugs?.length) {
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}

export default async function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  const nextLink = getProjectNextLink(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Page>
      <HeaderPage
        title={project.title}
        links={[{ label: 'Nos réalisations', url: '/realisations' }]}
        currentLink={{
          label: project.title,
          url: `/realisations/${params.slug}`,
        }}
        prevLink={{ label: 'Nos réalisations', url: '/realisations' }}
        nextLink={nextLink}
      />
      <ProjectIntro
        image={project.image}
        client={project.client}
        context_body={project.context_body}
        mission_body={project.mission_body}
        tags={project.tags}
      />
      <ProjectSections data={project.project_sections} />

      {!!project.projectsFeatured.length && (
        <ProjectsFeatured
          data={project.projectsFeatured}
          title='Nos projets similaires'
        />
      )}

      <Footer data={project?.footer} />

      <BottomNav
        previousLink={{ label: 'Nos réalisations', url: '/realisations' }}
        nextLink={nextLink}
      />
    </Page>
  );
}
