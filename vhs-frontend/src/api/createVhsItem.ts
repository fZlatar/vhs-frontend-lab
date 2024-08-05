import VhsItem from '@/models/VhsItem'
import axiosInstance from '@/utils/axiosInstance'

export default async function createVhsItem(
   formData: FormData
): Promise<VhsItem> {
   try {
      const res = await axiosInstance.post<VhsItem>('vhs', formData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
      if (res.status === 201) {
         return res.data
      }
      throw new Error(
         `Error with status code ${res.status} occurred while creating VHS item`
      )
   } catch (error) {
      console.error(`Error occurred while creating VHS item: ${error}`)
      throw error
   }
}
