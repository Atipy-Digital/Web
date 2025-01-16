import { Metadata } from 'next';

import '@/css/globals.scss';

import { siteOrigin, siteURL } from '@/lib/constants';

import { Layout } from '@/components/layout/Layout';

import { getEngagementData } from '@/services/engagement.service';
import { getFooterData } from '@/services/footer.service';
import { getNavigations } from '@/services/navigation.service';
import { getProjects } from '@/services/project.service';
import { getTagsBusiness, getTagsExpertise } from '@/services/tag.service';

import { AppHooks } from './app-hooks';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: siteURL,
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
  title: {
    default: 'Atipy',
    template: '%s | Atipy',
  },
  description:
    "Une tribu au service d'un monde plus accessible - Nous vous accompagnons dans les domaines du digital, du design, de l'accessibilité et de la conception universelle",
  openGraph: {
    title: 'Atipy',
    description:
      "Une tribu au service d'un monde plus accessible - Nous vous accompagnons dans les domaines du digital, du design, de l'accessibilité et de la conception universelle",
    url: siteOrigin,
    siteName: 'Atipy',
    images: [
      {
        url: 'favicon/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'favicon/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'Atipy',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  themeColor: '#ffffff',
  manifest: `${siteOrigin}/favicon/site.webmanifest`,
  twitter: {
    card: 'summary_large_image',
    title: 'Atipy',
    description:
      "Une tribu au service d'un monde plus accessible - Nous vous accompagnons dans les domaines du digital, du design, de l'accessibilité et de la conception universelle",
    site: '@adequat_atipy',
    images: [`${siteOrigin}/favicon/twitter-og.png`],
  },
  keywords: [
    'Atipy',
    'design',
    'digital',
    'accessibilité',
    'conseils',
    'formations',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = getNavigations();
  const footerLinks = getFooterData();
  const projects = getProjects();
  const tagsBusiness = getTagsBusiness();
  const tagsExpertise = getTagsExpertise();
  const engagementData = getEngagementData();

  return (
    <html
      lang='fr'
      className='light'
      style={{ colorScheme: 'light' }}
      suppressHydrationWarning={true}
    >
      <body id='top'>
        <Providers
          data={{
            projects,
            tagsBusiness,
            tagsExpertise,
            engagementData,
          }}
        >
          <Layout navLinks={navLinks} footerLinks={footerLinks}>
            {children}
          </Layout>
          <AppHooks />
        </Providers>
      </body>
    </html>
  );
}
