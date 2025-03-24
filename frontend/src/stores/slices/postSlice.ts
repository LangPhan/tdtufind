import instance from "@/utils/axiosConfig";
import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import { PostInterface } from "../types/PostInterface";



const postSlice: StateCreator<PostInterface> = (set, get) => ({
  isLoadingPost: false,
  elementPosts: [],
  personPosts : [],
  searchPosts: [],
  fetchPosts: async () => {
    const res = await instance.get('posts')
    set({elementPosts: res.data.data.filter((post:any) => post.isSomething  === true)})
    set({personPosts: res.data.data.filter((post:any) => post.isSomething ===false)})
  },
  queryPosts: async (query) => {
    set({isLoadingPost: true})  
    const res =  await instance.get(`posts?query=${query}`)
    set({searchPosts: res.data.data})
    set({isLoadingPost: false})
  },
  createNewPost: async (newPost) => {
    try {
      const res = await instance.post('posts', newPost)
      if(res.status === 201){
        document.dispatchEvent(new KeyboardEvent('keydown', {
          key: "Escape"
        }))
        get().fetchPosts()
        toast.success("Đăng bài viết thành công")
      } else {
        toast.error(res?.data.message)
      }
      console.log(res);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }
})

export default postSlice;