import VhsItem from "@/models/VhsItem"
import axiosInstance from "@/utils/axiosInstance"

export default async function getVhsItem(id: number): Promise<VhsItem> {
   try {
      const res = await axiosInstance.get<VhsItem>(`vhs/${id}`)
      if(res.status === 200) {
         return res.data
      }
      throw new Error(`Error with status code ${res.status} occurred while fetching VHS item #${id}`)
   } catch (error) {
      console.error(`Error occurred while fetching VHS item #${id}: ${error}`);
      throw error;
   }
}