import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import { Satisfy, Lato } from 'next/font/google';
import ModalContainer from '@/components/modals/view';
import DrawerContainer from '@/components/drawers/view';
import GalleryCarouselView from '@/components/gallery/view';
import '@/styles/globals.css';
import Providers from '@/components/providers';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
});

export const metadata: Metadata = {
  title: 'Boat Rental',
  description: 'Find your boat with the best experience.',
  icons: ['/images/logo.svg'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full font-lato antialiased',
        satisfy.variable,
        lato.variable,
      )}
    >
      <head />
      <body className="flex min-h-full flex-col">
        <Providers>
          {children}
          <ModalContainer />
          <DrawerContainer />
          <GalleryCarouselView />
        </Providers>
      </body>
    </html>
  );
}
