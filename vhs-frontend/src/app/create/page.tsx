import CreateForm from '@/components/forms/CreateForm'
import {
   Flex,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   InputRightElement,
   Textarea,
} from '@chakra-ui/react'

export default function Create() {
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
            <CreateForm />
         </Flex>
      </Flex>
   )
}
