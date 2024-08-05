import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import Footer from '@/components/footer/Footer'

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['300', '400', '700'],
   variable: '--font-roboto',
})

export const metadata: Metadata = {
   title: 'VHS',
   description: 'Video Home System',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   //There is some problem with flickering of theme colors while using chakra UI color modes
   //const cookie = cookies().get('chakra-ui-color-mode')?.value || ''
   return (
      <html lang="en">
         <body className={roboto.className}>
            <Providers>
               {children}
               <Footer />
            </Providers>
         </body>
      </html>
   )
}
