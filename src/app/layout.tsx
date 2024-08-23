import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customized Greeting Card Maker',
  description: 'Create personalized greeting cards for any occasion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-pink-100 to-blue-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
