import Header from '@/components/header/Header'

export default function CreateLayout({
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
