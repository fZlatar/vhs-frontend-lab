import Header from '@/components/header/Header'

export default function EditLayout({
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
