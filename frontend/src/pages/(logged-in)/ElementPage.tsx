import PostCard from '@/components/Sections/PostCard';
import CardSkeleton from '@/components/Sections/PostCard/CardSkeleton';
import instance from '@/utils/axiosConfig';
import { useQuery } from '@tanstack/react-query';

export async function getPost() {
  const res = await instance.get('posts')
  return res
}

export function fetchPosts() {
  const { data, isLoading } = useQuery({ queryKey: ['elementPost'], queryFn: getPost, })

  const posts = data?.data.data;

  const elementPosts = posts?.filter((post: any) => post.isSomething === true)
  const personPosts = posts?.filter((post: any) => post.isSomething === false)
  return { isLoading, elementPosts, personPosts }
}

const ElementPage = () => {

  const { isLoading, elementPosts } = fetchPosts()


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
