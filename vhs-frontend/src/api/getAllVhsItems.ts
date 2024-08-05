import VhsItem from '@/models/VhsItem'
import axiosInstance from '@/utils/axiosInstance'

export default async function getAllVhsItems(
   query?: string
): Promise<VhsItem[]> {
   try {
      // There could be more params (description, genre...) but it would either require multiple requests to backend or there should be some kind of switch at frontend that determines what are we searching for (is it a title, description or genre)
      const params = query
         ? {
              title: query,
           }
         : {}
      const res = await axiosInstance.get<VhsItem[]>('vhs', { params })
      if (res.status === 200) {
         return res.data
      }
      throw new Error(
         `Error with status code ${res.status} occurred while fetching all VHS items`
      )
   } catch (error) {
      console.error(`Error occurred while fetching all VHS items: ${error}`)
      throw error
   }
}
