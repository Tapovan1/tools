import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tapovan School - Tools ',
  description: 'Tapovan School - Tools',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
