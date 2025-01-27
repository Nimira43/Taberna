import type { Metadata } from 'next'
import { AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter'
import './globals.css'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import darkTheme from './dark.theme'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Taberna',
  description: 'Online shop using Next JS, Material UI, Nest JS and Prisma',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container>
              {children}
            </Container>
          </ThemeProvider>        
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
