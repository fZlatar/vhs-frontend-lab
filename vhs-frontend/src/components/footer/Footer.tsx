import { Box, Flex, Text } from '@chakra-ui/react'

export default function Footer() {
   return (
      <Flex
         as="footer"
         w="100%"
         bg="secondaryDefault"
         flexDir="column"
         justifyContent="flex-start"
         alignItems="center"
         pl="12px"
         pr="12px"
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
      >
         <Text
            as="h4"
            fontWeight="bold"
            fontSize={{ base: '16px', lg: '20px' }}
            mt="32px"
            textAlign="center"
         >
            VHS (Video Home System) rental shop
         </Text>
         <Text
            as="p"
            fontWeight="normal"
            fontSize={{ base: '16px', lg: '20px' }}
            textAlign="center"
            mt="8px"
         >
            is a nostalgic place where customers can rent movies on VHS tapes.
            Popular from the 1970s to the early 2000s, these shops offer a
            unique selection of films in their original analog format. They
            provide a charming, retro experience and personalized movie
            recommendations.
         </Text>
         <Text
            as="p"
            fontWeight="light"
            fontSize={{ base: '12px', lg: '14px' }}
            mt="32px"
            mb="12px"
            textAlign="center"
         >
            Developer - Fran Zlatar
         </Text>
      </Flex>
   )
}
