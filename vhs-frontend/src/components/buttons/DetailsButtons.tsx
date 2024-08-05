'use client'

import deleteVhsItem from '@/api/deleteVhsItem'
import VhsItem from '@/models/VhsItem'
import VHSButton from '@/modules/button/VHSButton'
import ConfirmationModal from '@/modules/confirmationModal/ConfirmationModal'
import VHSButtonLink from '@/modules/link/VHSButtonLink'
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DetailsButtons({ item }: { item: VhsItem }) {
   const router = useRouter()
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleDelete = () => {
      deleteVhsItem(item.id)
      router.push('/')
   }

   const handleOpenModal = () => {
      setIsModalOpen(true)
   }

   const handleCloseModal = () => {
      setIsModalOpen(false)
   }

   return (
      <Flex
         flexDir={{ base: 'column', lg: 'row' }}
         justifyContent="center"
         alignItems="center"
         gap={{ base: '16px', lg: '32px' }}
         mt="24px"
      >
         <VHSButtonLink
            variant="default"
            label="Edit"
            href={`/edit/${item.id}`}
         />
         <VHSButton variant="error" label="Delete" onClick={handleOpenModal} />
         <ConfirmationModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={handleDelete}
            message="Are you sure you want to delete this item?"
         />
      </Flex>
   )
}
