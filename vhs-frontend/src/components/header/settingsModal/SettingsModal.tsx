'use client'

import CheckIcon from '@/icons/CheckIcon'
import { Box, Flex, FlexProps, Text, useColorMode } from '@chakra-ui/react'

export default function SettingsModal(props: FlexProps) {
   const { colorMode, toggleColorMode } = useColorMode()
   return (
      <Flex
         {...props}
         flexDir="column"
         justifyContent="flex-start"
         color="onSurfaceNLV1"
         bg="surfaceS1"
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
         gap="16px"
         pt="16px"
         pb="16px"
         pl="24px"
         pr="24px"
         borderRadius="8px"
      >
         <Text fontWeight="bold" fontSize="20px" textAlign="left">
            Change Theme
         </Text>
         <Flex
            onClick={colorMode !== 'light' ? toggleColorMode : undefined}
            cursor="pointer"
            justifyContent="space-between"
            flexDir="row"
            alignItems="center"
         >
            <Text
               fontWeight={colorMode === 'light' ? 'bold' : 'normal'}
               fontSize="20px"
               textAlign="left"
            >
               Light
            </Text>
            {colorMode === 'light' && (
               <Box color="special3">
                  <CheckIcon />
               </Box>
            )}
         </Flex>
         <Flex
            onClick={colorMode !== 'dark' ? toggleColorMode : undefined}
            cursor="pointer"
            justifyContent="space-between"
            flexDir="row"
            alignItems="center"
         >
            <Text
               fontWeight={colorMode === 'dark' ? 'bold' : 'normal'}
               fontSize="20px"
               textAlign="left"
            >
               Dark
            </Text>
            {colorMode === 'dark' && (
               <Box color="special3">
                  <CheckIcon />
               </Box>
            )}
         </Flex>
      </Flex>
   )
}
