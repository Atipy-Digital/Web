import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.scss';

import { siteOrigin, siteURL } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: siteURL,
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  title: {
    default: 'Atipy',
    template: '%s | Atipy',
  },
  description: "Atipy, la tribu au service d'un monde plus accessible.",
  openGraph: {
    title: 'Atipy',
    description: "Atipy, la tribu au service d'un monde plus accessible.",
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
    description: "Atipy, la tribu au service d'un monde plus accessible.",
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
  return (
    <html lang='fr'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
