import '#/styles/globals.css';

import db from '#/lib/db';
import Byline from '#/ui/byline';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: 'AI Merge', template: '%s | Next.js Playground' },
  metadataBase: new URL('https://app-router.vercel.app'),
  description:
    'Funny game to merge characters with AI',
  openGraph: {
    title: 'Next.js Playground',
    description:
      'A playground to explore Next.js features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    images: [`/api/og?title=Next.js Playground`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const demos = db.demo.findMany();
  return (
    <html lang="en" className="[color-scheme:dark] russo-one-regular">
      <body
        className={`overflow-hidden bg-gray-950 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <div className="relative mx-auto -space-y-[1px] lg:px-8 lg:py-0">
            {/* Blurred background layer */}
            <div 
              className="absolute inset-0 bg-cover bg-no-repeat bg-center blur-sm -z-10" 
              style={{backgroundImage: 'url(/images/wallpaper.jpg)'}}
            ></div>
            {children}

            {/* <Byline /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
