import './globals.css'
import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { PageFooter } from '@/components/PageFooter'
import { Montserrat } from 'next/font/google'
import { ToggleTheme } from '@/components/ToggleTheme'
import { ThemeProvider } from '@/context/themeContext'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Billy Townsend',
  description: 'Software Engineer'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <ThemeProvider>
    <html lang='en'>
        <body className={montserrat.className}>
          <NavBar />
          <ToggleTheme />
          <main
            className={`bg-gradient-to-b from-nonBlack to-liteBG min-h-[calc(100vh-177px)] pt-[56px]`}
          >
            {children}
          </main>
          <PageFooter />
        </body>
    </html>
      </ThemeProvider>
  )
}
