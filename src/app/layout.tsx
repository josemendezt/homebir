import Head from 'next/head'
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import NavMenu from './landing/navMenu'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Hombir - The best interactive home models</title>
        <meta name="description" content="Hombir description" />
        <meta property="og:title" content="Hombir - title" />
        <meta property="og:description" content="Hombir des" />
        <meta property="og:url" content="https://hombir.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <Link href="/">
          <div className="flex justify-between px-10 pt-4 pb-0 sm:p-0">
            <Image src="/logos/logo_black.svg" alt="Hombir Logo" width={180} className="mr-4" height={90} priority />
            {/* <NavMenu /> */}
          </div>
        </Link>
        {children}
      </body>
    </html>
  )
}
