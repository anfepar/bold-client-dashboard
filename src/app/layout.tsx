import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './ui/globals.sass'
import Header from './ui/components/Header/Header'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Bold dashboard',
  description: 'Bold client dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
