import Header from '@/components/header/Header'

export default function DetailsLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <>
         <Header />
         {children}
      </>
   )
}
