'use client'

import SearchIcon from '@/icons/SearchIcon'
import {
   Box,
   Input,
   InputGroup,
   InputGroupProps,
   InputRightElement,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

interface SearchProps extends InputGroupProps {
   focused?: boolean
}

export default function Search({ focused = false, ...props }) {
   const [query, setQuery] = useState<string>('')
   const inputRef = useRef<HTMLInputElement>(null)
   const router = useRouter()

   useEffect(() => {
      if (focused) inputRef.current?.focus()
   }, [focused])

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         router.push(`/?query=${query}`)
      }
   }

   return (
      <InputGroup
         {...props}
         bg="surfaceS0"
         borderRadius="8px"
         size={{ base: 'md', lg: 'lg' }}
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
         onKeyDown={handleKeyDown}
      >
         <Input
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            border="none"
            _placeholder={{
               color: 'onSurfaceNLV2',
            }}
            ref={inputRef}
         ></Input>
         <InputRightElement
            cursor="pointer"
            onClick={() => router.push(`/?query=${query}`)}
         >
            <Box display={{ base: 'none', lg: 'initial' }}>
               <SearchIcon />
            </Box>
            <Box display={{ base: 'initial', lg: 'none' }}>
               <SearchIcon height={28} width={28} stroke={3} />
            </Box>
         </InputRightElement>
      </InputGroup>
   )
}
