import PostCard from "@/components/Sections/PostCard"
import useStore from "@/hooks/useStore"
import { FileSearch } from "lucide-react"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function SearchPage() {
  const { query } = useParams()
  const {searchPosts, queryPosts} = useStore((state) => state)
  
  useEffect(() => {
    queryPosts(query ? query : "")
  },[query])
 return <div>
  <div className="mx-2 my-2 h-full">
    <i>{searchPosts.length}</i> kết quả tìm kiếm cho từ khóa: <b>{query}</b>
  </div>
 {searchPosts && searchPosts.map((post:any) => {
       return <PostCard key={post._id} author= {post.author} content={post.content} createdAt={post.createdAt} images={post.images} timeLost={post.timeLost} placement= {post.placement} type={post.type} />
      })}
      {searchPosts.length === 0 && (
        <div className="w-full h-[500px] flex flex-col justify-center items-center border-2 rounded-xl border-slate-4000">
          <FileSearch className="w-44 h-44"/>
          <h2 className="text-2xl font-bold">Không tìm thấy bài viết nào phù hợp</h2>
          <Link to={"/"}>Trang chủ</Link>
        </div>
      )}
 </div> 
};
