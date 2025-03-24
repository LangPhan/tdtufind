import instance from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

async function getPost() {
  const res = await instance.get('posts')
  return res
}

export function useGetPosts() {
  const { data, isLoading } = useQuery({ queryKey: ['elementPost'], queryFn: getPost, })

  const posts = data?.data.data;

  const elementPosts = posts?.filter((post: any) => post.isSomething === true)
  const personPosts = posts?.filter((post: any) => post.isSomething === false)
  return { isLoading, elementPosts, personPosts }
}
