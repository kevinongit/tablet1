import './globals.css'
import { Inter } from 'next/font/google'

import { AppMain } from './app-main'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tablet',
  description: 'now ready, set...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppMain>
          {children}
        </AppMain>
      </body>
    </html>
  )
}
