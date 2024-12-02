import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'Ali Abdaal - Doctor, YouTuber, Entrepreneur',
  description: 'Personal brand and content creator portfolio showcasing videos, podcasts, and educational content',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable} bg-white`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
