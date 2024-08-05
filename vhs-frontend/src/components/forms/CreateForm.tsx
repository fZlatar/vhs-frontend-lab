'use client'

import createVhsItem from '@/api/createVhsItem'
import VHSButton from '@/modules/button/VHSButton'
import VHSButtonLink from '@/modules/link/VHSButtonLink'
import {
   Flex,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   InputRightElement,
   Textarea,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

export default function CreateForm() {
   const [allowSubmit, setAllowSubmit] = useState(false)
   const fileInputRef = useRef<HTMLInputElement | null>(null)
   const [formValues, setFormValues] = useState({
      title: '',
      description: '',
      genre: '',
      duration: '',
      releasedAt: '',
      rentalDuration: '',
      rentalPrice: '',
      thumbnail: null as File | null,
   })

   const router = useRouter()

   const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target
      setFormValues((prevValues) => ({
         ...prevValues,
         [name]: value,
      }))
      setAllowSubmit(checkValues())
   }

   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormValues((prevValues) => ({
         ...prevValues,
         thumbnail: e.target.files ? e.target.files[0] : null,
      }))
   }

   const handleFileButtonClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click()
      }
   }

   const checkValues = () => {
      return (
         formValues.title !== '' &&
         formValues.description !== '' &&
         formValues.genre !== '' &&
         formValues.duration !== '' &&
         formValues.releasedAt !== '' &&
         formValues.rentalDuration !== '' &&
         formValues.rentalPrice !== ''
      )
   }

   useEffect(() => {
      setAllowSubmit(checkValues())
   }, [formValues])

   const handleSubmit = async () => {
      const formData = new FormData()
      formData.append('title', formValues.title)
      formData.append('description', formValues.description)
      formData.append('genre', formValues.genre)
      formData.append('duration', formValues.duration)
      formData.append('releasedAt', formValues.releasedAt)
      formData.append('rentalDuration', formValues.rentalDuration)
      formData.append('rentalPrice', formValues.rentalPrice)
      if (formValues.thumbnail) {
         formData.append('thumbnail', formValues.thumbnail)
      }

      try {
         const response = await createVhsItem(formData)
         router.push(`/details/${response.id}`)
      } catch (error) {
         console.error('Error:', error)
      }
   }

   return (
      <>
         <Input
            ref={fileInputRef}
            name="thumbnail"
            type="file"
            accept="image/*"
            display="none"
            onChange={handleFileChange}
         />
         <VHSButton
            w="100%"
            onClick={handleFileButtonClick}
            bg="surfaceS0"
            boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
            variant="default"
            label={
               formValues.thumbnail
                  ? formValues.thumbnail.name
                  : 'Browse thumbnail'
            }
         ></VHSButton>
         <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
               name="title"
               bg="surfaceS0"
               boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
               placeholder="Title"
               value={formValues.title}
               onChange={handleChange}
            />
         </FormControl>
         <FormControl isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
               name="description"
               bg="surfaceS0"
               boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
               placeholder="Description"
               value={formValues.description}
               onChange={handleChange}
            />
         </FormControl>
         <FormControl isRequired>
            <FormLabel htmlFor="genre">Genre</FormLabel>
            <Input
               name="genre"
               bg="surfaceS0"
               boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
               placeholder="Genre"
               value={formValues.genre}
               onChange={handleChange}
            />
         </FormControl>
         <FormControl isRequired>
            <FormLabel htmlFor="duration">Duration</FormLabel>
            <InputGroup>
               <InputRightElement>min</InputRightElement>
               <Input
                  name="duration"
                  type="number"
                  bg="surfaceS0"
                  boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
                  placeholder="000"
                  value={formValues.duration}
                  onChange={handleChange}
               />
            </InputGroup>
         </FormControl>
         <FormControl isRequired>
            <FormLabel htmlFor="releasedAt">Released at</FormLabel>
            <Input
               name="releasedAt"
               type="number"
               bg="surfaceS0"
               boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
               placeholder="0000"
               value={formValues.releasedAt}
               onChange={handleChange}
            />
         </FormControl>
         <FormControl isRequired>
            <FormLabel htmlFor="rentalDuration">Rental duration</FormLabel>
            <InputGroup>
               <InputRightElement>d</InputRightElement>
               <Input
                  name="rentalDuration"
                  type="number"
                  bg="surfaceS0"
                  boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
                  placeholder="0"
                  value={formValues.rentalDuration}
                  onChange={handleChange}
               />
            </InputGroup>
         </FormControl>
         <FormControl isRequired>
            <FormLabel htmlFor="rentalPrice">Rental price</FormLabel>
            <InputGroup>
               <InputRightElement>€</InputRightElement>
               <Input
                  name="rentalPrice"
                  type="number"
                  bg="surfaceS0"
                  boxShadow="0px 5px 5px 0px rgba(0, 0, 0, 0.25)"
                  placeholder="0"
                  value={formValues.rentalPrice}
                  onChange={handleChange}
               />
            </InputGroup>
         </FormControl>
         <Flex
            flexDir={{ base: 'column', lg: 'row' }}
            justifyContent="center"
            alignItems="center"
            gap={{ base: '16px', lg: '32px' }}
            mt="24px"
         >
            <VHSButton
               variant="success"
               label="Create"
               isDisabled={!allowSubmit}
               onClick={() => handleSubmit()}
            />
            <VHSButtonLink variant="error" label="Cancel" href="/" />
         </Flex>
      </>
   )
}
