import getVhsItem from '@/api/getVhsItem'
import EditForm from '@/components/forms/EditForm'
import { Flex } from '@chakra-ui/react'

export default async function Edit({ params }: { params: { id: number } }) {
   const item = await getVhsItem(params.id)

   return (
      <Flex
         as="main"
         justifyContent="flex-start"
         alignItems="center"
         p={{ base: '24px 36px', lg: '48px 56px' }}
      >
         <Flex
            borderRadius="8px"
            flexDir="column"
            w="100%"
            bg="surfaceS1"
            justifyContent="flex-start"
            alignItems="center"
            p={{ base: '32px 48px', lg: '56px 96px' }}
            boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
            gap={{ base: '12px', lg: '24px' }}
         >
            <EditForm item={item} />
         </Flex>
      </Flex>
   )
}
