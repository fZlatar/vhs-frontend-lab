import getAllVhsItems from '@/api/getAllVhsItems'
import Card from '@/components/card/Card'
import Header from '@/components/header/Header'
import { Flex } from '@chakra-ui/react'

export default async function Home({
   searchParams,
}: {
   searchParams?: { [key: string]: string | string[] | undefined }
}) {
   const query = Array.isArray(searchParams?.query)
      ? searchParams.query.join(' ')
      : searchParams?.query
   const items = await getAllVhsItems(query)
   return (
      <>
         <Header variant="home" />
         <main>
            <Flex
               ml={{ base: '32px', lg: '56px' }}
               mr={{ base: '32px', lg: '56px' }}
               mt={{ base: '24px', lg: '32px' }}
               mb={{ base: '24px', lg: '32px' }}
               gap={{ base: '16px', lg: '32px' }}
               flexDir="column"
            >
               {items.map((item) => (
                  <Card item={item} key={item.id} />
               ))}
            </Flex>
         </main>
      </>
   )
}
