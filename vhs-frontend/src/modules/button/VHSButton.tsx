import { Button, ButtonProps, Text } from '@chakra-ui/react'

interface Props extends ButtonProps {
   variant: 'default' | 'error' | 'success'
   label: string
}

export default function VHSButton({ variant, label, ...props }: Props) {
   const color =
      variant === 'error'
         ? 'special2'
         : variant === 'success'
           ? 'special3'
           : 'special1'
   return (
      <Button
         w={{ base: '164px', lg: '200px' }}
         h={{ base: '48px', lg: '64px' }}
         {...props}
         borderRadius="8px"
         bg={color}
         boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
         _hover={{ bg: color }}
      >
         <Text
            color="special4"
            fontSize={{ base: '16px', lg: '20px' }}
            fontWeight="bold"
         >
            {label}
         </Text>
      </Button>
   )
}
