import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import Providers from './Provider';
import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'AuthDirect',
  description: 'AuthDirect - Mordern Authentication Solution',
  other: {
    "og:type": "website",
    'theme-color': '#6061b0',
    "color-scheme": "dark",
    "twitter:image": '',
    "twitter:card": "summary_large_image",
    "og:url": "authdirect.versel.app",
    "og:image": '',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
      <Analytics />
    </html>
  )
}
