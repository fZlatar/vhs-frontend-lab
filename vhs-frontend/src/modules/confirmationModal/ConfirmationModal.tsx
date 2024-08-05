import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
} from '@chakra-ui/react'
import VHSButton from '../button/VHSButton'

interface ConfirmationModalProps {
   isOpen: boolean
   onClose: () => void
   onConfirm: () => void
   message: string
}

const ConfirmationModal = ({
   isOpen,
   onClose,
   onConfirm,
   message,
}: ConfirmationModalProps) => {
   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent bg="secondaryDefault">
            <ModalHeader>Confirm</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{message}</ModalBody>
            <ModalFooter
               display="flex"
               justifyContent="center"
               alignItems="center"
               gap="20px"
            >
               <VHSButton variant="default" label="Cancel" onClick={onClose} />
               <VHSButton variant="error" label="Yes" onClick={onConfirm} />
            </ModalFooter>
         </ModalContent>
      </Modal>
   )
}

export default ConfirmationModal
