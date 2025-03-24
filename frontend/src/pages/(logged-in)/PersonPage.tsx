import PostCard from '@/components/Sections/PostCard';
import CardSkeleton from '@/components/Sections/PostCard/CardSkeleton';
import { fetchPosts } from './ElementPage';

const PersonPage = () => {
  const { personPosts, isLoading } = fetchPosts()
  return (
    <>
      {
        isLoading ? <CardSkeleton /> :
          (personPosts && personPosts.map((post: any) => {
            return <PostCard key={post._id} author={post.author} content={post.content} createdAt={post.createdAt} images={post.images} timeLost={post.timeLost} placement={post.placement} type={post.type} />
          }))
      }
    </>
  );
};

export default PersonPage;
