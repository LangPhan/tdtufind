import instance from "@/utils/axiosConfig"
import { useQuery } from "@tanstack/react-query"

const getConversations = async (userId:string) => {
    const res = await instance.get('conversations/user/'+userId)
    return res
}

export const useGetConversations = (userId: string) => {
  return useQuery({
    queryKey: ["conversations"],
    queryFn: () => getConversations(userId) 
  })
}