import { Spectral, Mulish } from 'next/font/google';
import { SITE_URL } from '@/lib/links';
import './globals.css';

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Rotshield', template: '%s — Rotshield' },
  description: 'Screen time control for iPhone. No account, no server, no analytics.',
  openGraph: { siteName: 'Rotshield', type: 'website' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF7EF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0B0C' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spectral.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
