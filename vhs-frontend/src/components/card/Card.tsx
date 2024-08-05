import VhsItem from '@/models/VhsItem'
import { Flex, Text, Image, Box, Link } from '@chakra-ui/react'

export default function Card({ item }: { item: VhsItem }) {
   return (
      <Link href={`/details/${item.id}`}>
         <Flex
            h={{ base: '355px', lg: '320px' }}
            bg="surfaceS1"
            flexDir={{ base: 'column', lg: 'row' }}
            borderRadius="8px"
            justifyContent="flex-start"
            alignItems="center"
            pl={{ base: '24px', lg: '48px' }}
            pr={{ base: '24px', lg: '48px' }}
            pt={{ base: '16px', lg: '32px' }}
            pb={{ base: '16px', lg: '32px' }}
            boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
            overflow="hidden"
            gap={{ base: '24px', lg: '32px' }}
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
                     src={item.thumbnail}
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
            <Flex
               flexDir="column"
               alignItems="flex-start"
               justifyContent="flex-start"
               flex={1}
               overflow="hidden"
            >
               <Text
                  as="h2"
                  fontWeight="bold"
                  fontSize={{ base: '32px', lg: '36px' }}
                  textAlign={{ base: 'center', lg: 'left' }}
                  w="100%"
               >
                  {item.title}
               </Text>
               <Text as="p" fontSize="20px" textOverflow="ellipsis" w="100%">
                  {item.description}
               </Text>
            </Flex>
         </Flex>
      </Link>
   )
}
