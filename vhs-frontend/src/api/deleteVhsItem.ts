import axiosInstance from '@/utils/axiosInstance'

export default async function deleteVhsItem(id: number): Promise<void> {
   try {
      const res = await axiosInstance.delete(`vhs/${id}`)
      if (res.status === 204) {
         return
      }
      throw new Error(
         `Error with status code ${res.status} occurred while deleting VHS item #${id}`
      )
   } catch (error) {
      console.error(`Error occurred while deleting VHS item #${id}: ${error}`)
      throw error
   }
}
