import { Link, LinkProps, Text } from '@chakra-ui/react'

interface Props extends LinkProps {
   variant: 'default' | 'error' | 'success'
   label: string
}

export default function VHSButtonLink({ variant, label, ...props }: Props) {
   const color =
      variant === 'error'
         ? 'special2'
         : variant === 'success'
           ? 'special3'
           : 'special1'
   return (
      <Link
         {...props}
         w={{ base: '164px', lg: '200px' }}
         h={{ base: '48px', lg: '64px' }}
         {...props}
         borderRadius="8px"
         bg={color}
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
         _hover={{ bg: color }}
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
         <Text
            color="special4"
            fontSize={{ base: '16px', lg: '20px' }}
            fontWeight="bold"
         >
            {label}
         </Text>
      </Link>
   )
}
