import UpdateVhsDto from '@/models/UpdateVhsDto'
import VhsItem from '@/models/VhsItem'
import axiosInstance from '@/utils/axiosInstance'

export default async function updateVhsItem(
   id: number,
   formData: FormData
): Promise<VhsItem> {
   try {
      const res = await axiosInstance.patch<VhsItem>(`vhs/${id}`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
      if (res.status === 200) {
         return res.data
      }
      throw new Error(
         `Error with status code ${res.status} occurred while updating VHS item #${id}`
      )
   } catch (error) {
      console.error(`Error occurred while updating VHS item #${id}: ${error}`)
      throw error
   }
}
