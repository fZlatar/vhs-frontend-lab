'use client'

import { theme } from '@/utils/theme'
import {
   ChakraBaseProvider,
   ColorModeScript,
   cookieStorageManagerSSR,
   localStorageManager,
   ColorModeProvider,
} from '@chakra-ui/react'

export function Providers({
   cookie,
   children,
}: {
   cookie?: string
   children: React.ReactNode
}) {
   //Using only local storage so flickering is happening when going between pages
   const colorModeManager =
      typeof cookie === 'string'
         ? cookieStorageManagerSSR(cookie)
         : localStorageManager
   return (
      <ChakraBaseProvider theme={theme} colorModeManager={colorModeManager}>
         {children}
      </ChakraBaseProvider>
   )
}
