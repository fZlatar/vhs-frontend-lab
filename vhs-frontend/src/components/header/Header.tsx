'use client'

import CreateItemIcon from '@/icons/CreateItemIcon'
import SettingsIcon from '@/icons/SettingsIcon'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import Search from './search/Search'
import SearchIcon from '@/icons/SearchIcon'
import { useEffect, useRef, useState } from 'react'
import SettingsModal from './settingsModal/SettingsModal'

export default function Header({
   variant = 'default',
}: {
   variant?: 'default' | 'home'
}) {
   const [searchOpen, setSearchOpen] = useState<boolean>(false)
   const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
   const searchRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            searchRef.current &&
            !searchRef.current.contains(event.target as Node)
         ) {
            setSearchOpen(false)
         }
      }

      if (searchOpen) {
         document.addEventListener('mousedown', handleClickOutside)
      } else {
         document.removeEventListener('mousedown', handleClickOutside)
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [searchOpen])

   if (variant === 'home')
      return (
         <Flex
            as="header"
            w="100%"
            h={{ base: '64px', lg: '96px' }}
            bg="primaryDefault"
            boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
            position="sticky"
            top="0"
            left="0"
            zIndex="5"
         >
            <Flex
               h="100%"
               w="100%"
               flexDir="row"
               justifyContent="flex-start"
               alignItems="center"
               pl="24px"
            >
               <Link href="/">
                  <Text
                     as="h1"
                     color="onSurfaceNLV1"
                     fontWeight="bold"
                     fontSize={{ base: '32px', lg: '48px' }}
                  >
                     VHS
                  </Text>
               </Link>
               <Flex
                  justifyContent="flex-end"
                  flexDir="row"
                  color="onSurfaceNLV1"
                  alignItems="center"
                  position="absolute"
                  right={{ base: '24px', lg: '56px' }}
                  gap={{ base: '16px', lg: '32px' }}
               >
                  <Box
                     cursor="pointer"
                     display={{ base: 'initial', lg: 'none' }}
                     onClick={() => setSearchOpen(true)}
                  >
                     <SearchIcon height={32} width={32} stroke={3} />
                  </Box>
                  <Link href="/create">
                     <Box display={{ base: 'flex', lg: 'none' }}>
                        <CreateItemIcon width={47} height={32} stroke={3} />
                     </Box>
                     <Box display={{ base: 'none', lg: 'flex' }}>
                        <CreateItemIcon />
                     </Box>
                  </Link>
                  <Box cursor="pointer" onClick={() => setSettingsOpen(true)}>
                     <Box display={{ base: 'flex', lg: 'none' }}>
                        <SettingsIcon width={32} height={32} stroke={3} />
                     </Box>
                     <Box display={{ base: 'none', lg: 'flex' }}>
                        <SettingsIcon />
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Flex
               maxW="400px"
               h="100%"
               position="absolute"
               top="0px"
               left="calc(50% - 200px)"
               justifyContent="center"
               alignItems="center"
               display={{ base: 'none', lg: 'flex' }}
            >
               <Search w="400px" />
            </Flex>
            {searchOpen && (
               <Flex
                  w="100%"
                  h="100%"
                  position="absolute"
                  top="0px"
                  left="0px"
                  justifyContent="center"
                  alignItems="center"
                  display={{ base: 'flex', lg: 'none' }}
                  ref={searchRef}
                  bg="primaryDefault"
               >
                  <Search focused={true} w="calc(100% - 48px)" />
               </Flex>
            )}
            {settingsOpen && (
               <Box
                  onClick={() => setSettingsOpen(false)}
                  w="100%"
                  h="100%"
                  top="0px"
                  left="0px"
                  position="fixed"
                  zIndex="10"
               >
                  <SettingsModal
                     position="fixed"
                     right="24px"
                     top={{ base: '72px', lg: '104px' }}
                     zIndex="11"
                     onClick={(event) => event.stopPropagation()}
                  />
               </Box>
            )}
         </Flex>
      )

   return (
      <Flex
         as="header"
         w="100%"
         h={{ base: '64px', lg: '96px' }}
         bg="primaryDefault"
         flexDir="row"
         justifyContent={{ base: 'flex-start', lg: 'center' }}
         alignItems="center"
         pl={{ base: '24px', lg: '0px' }}
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
         position="sticky"
         top="0"
         left="0"
         zIndex="5"
      >
         <Link href="/">
            <Text
               as="h1"
               color="onSurfaceNLV1"
               fontWeight="bold"
               fontSize={{ base: '32px', lg: '48px' }}
            >
               VHS
            </Text>
         </Link>
         <Flex
            justifyContent="flex-end"
            flexDir="row"
            color="onSurfaceNLV1"
            alignItems="center"
            position="absolute"
            right={{ base: '24px', lg: '56px' }}
            gap={{ base: '16px', lg: '32px' }}
         >
            <Link href="/create">
               <Box display={{ base: 'flex', lg: 'none' }}>
                  <CreateItemIcon width={47} height={32} stroke={3} />
               </Box>
               <Box display={{ base: 'none', lg: 'flex' }}>
                  <CreateItemIcon />
               </Box>
            </Link>
            <Box cursor="pointer" onClick={() => setSettingsOpen(true)}>
               <Box display={{ base: 'flex', lg: 'none' }}>
                  <SettingsIcon width={32} height={32} stroke={3} />
               </Box>
               <Box display={{ base: 'none', lg: 'flex' }}>
                  <SettingsIcon />
               </Box>
            </Box>
         </Flex>
         {settingsOpen && (
            <Box
               onClick={() => setSettingsOpen(false)}
               w="100%"
               h="100%"
               top="0px"
               left="0px"
               position="fixed"
               zIndex="10"
            >
               <SettingsModal
                  position="fixed"
                  right="24px"
                  top={{ base: '72px', lg: '104px' }}
                  zIndex="11"
                  onClick={(event) => event.stopPropagation()}
               />
            </Box>
         )}
      </Flex>
   )
}
