import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ubuntuMono = Ubuntu_Mono({ subsets: ['latin'], weight: "400", variable: "--font-ubuntu" })

export const metadata: Metadata = {
  title: 'AskSQL',
  description: 'App de tradução de SQL com IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className='bg-blueberry'>{children}</body>
    </html>
  )
}
