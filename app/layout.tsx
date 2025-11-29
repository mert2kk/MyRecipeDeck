import AuthProvider from '@/components/providers/AuthProvider'
import type { Metadata } from 'next'
import { Caveat, Geist, Geist_Mono, Kalam } from 'next/font/google'
import './globals.css'
export const metadata: Metadata = {
  title: 'MyRecipeDeck',
  description: 'Easily organize and access your favorite recipes in one place.',
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: '600',
})

const kalam = Kalam({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kalam',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} 
        ${kalam.variable} antialiased flex items-start justify-center min-h-screen`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
