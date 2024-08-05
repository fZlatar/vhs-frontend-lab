import { Flex, Text } from '@chakra-ui/react'

export default function Bullet({
   name,
   value,
}: {
   name: string
   value: string | number
}) {
   return (
      <Flex
         bg="primaryVariant"
         h="64px"
         w="180px"
         borderRadius="32px"
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
         flexDir="column"
         justifyContent="flex-start"
         alignItems="center"
      >
         <Text as="p" fontSize="16px" fontWeight="light" h="20px">
            {name}
         </Text>
         <Text
            as="p"
            fontSize="20px"
            fontWeight="bold"
            textTransform="uppercase"
         >
            {value}
         </Text>
      </Flex>
   )
}
