import PostCard from '@/components/Sections/PostCard';
import CardSkeleton from '@/components/Sections/PostCard/CardSkeleton';
import { useGetPosts } from '@/hooks/api/usePostQuery';
const ElementPage = () => {

  const { isLoading, elementPosts } = useGetPosts()


  return (
    <>
      {
        isLoading ? <CardSkeleton /> :
          (elementPosts && elementPosts.map((post: any) => {
            return <PostCard key={post._id} author={post.author} content={post.content} createdAt={post.createdAt} images={post.images} timeLost={post.timeLost} placement={post.placement} type={post.type} />
          }))
      }
    </>
  );
};

export default ElementPage;
