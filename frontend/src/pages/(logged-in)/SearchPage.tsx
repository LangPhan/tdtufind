import PostCard from "@/components/Sections/PostCard"
import useStore from "@/hooks/useStore"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SearchPage() {
  const { query } = useParams()
  const {searchPosts, queryPosts} = useStore((state) => state)
  
  useEffect(() => {
    queryPosts(query ? query : "")
  },[query])
 return <div>
  <div className="mx-2 my-2">
    <i>{searchPosts.length}</i> kết quả tìm kiếm cho từ khóa: <b>{query}</b>
  </div>
 {searchPosts && searchPosts.map((post:any) => {
       return <PostCard key={post._id} author= {post.author} content={post.content} createdAt={post.createdAt} images={post.images} timeLost={post.timeLost} placement= {post.placement} type={post.type} />
      })}
 </div> 
};
