import getVhsItem from '@/api/getVhsItem'
import Bullet from '@/components/bullet/Bullet'
import DetailsButtons from '@/components/buttons/DetailsButtons'
import { Flex, Image, Text } from '@chakra-ui/react'

export default async function Details({ params }: { params: { id: number } }) {
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
            <Flex
               h={{ base: '158px', lg: '256px' }}
               w={{ base: '281px', lg: '455px' }}
               minH={{ base: '158px', lg: '256px' }}
               minW={{ base: '281px', lg: '455px' }}
               justifyContent="center"
               alignItems="center"
               borderColor="onSurfaceNLV1"
               border={item.thumbnail ? 'none' : '1px solid'}
            >
               {item.thumbnail ? (
                  <Image
                     src={`../../vhs-backend/${item.thumbnail}`}
                     alt="thumbnail"
                     h="100%"
                     w="100%"
                  />
               ) : (
                  <Text
                     as="h1"
                     fontWeight="bold"
                     fontSize={{ base: '32px', lg: '36px' }}
                  >
                     No image
                  </Text>
               )}
            </Flex>
            <Text
               as="h1"
               fontSize={{ base: '32px', lg: '36px' }}
               fontWeight="bold"
               borderColor="onSurfaceNLV1"
               borderBottom="1px solid"
               w="100%"
               textAlign="center"
            >
               {item.title}
            </Text>
            <Text
               as="p"
               fontWeight="normal"
               fontSize="20px"
               w="100%"
               textAlign="left"
            >
               {item.description}
            </Text>
            <Flex
               flexDir={{ base: 'column', lg: 'row' }}
               flexWrap="wrap"
               justifyContent="flex-start"
               alignItems="center"
               gap="30px"
            >
               <Bullet name="genre" value={item.genre} />
               <Bullet name="duration" value={item.duration} />
               <Bullet name="year of release" value={item.releasedAt} />
               <Bullet name="rental price" value={item.rentalPrice} />
               <Bullet name="quantity" value={item.quantity} />
               <Bullet name="rental duration" value={item.rentalDuration} />
            </Flex>
            <DetailsButtons item={item} />
         </Flex>
      </Flex>
   )
}
