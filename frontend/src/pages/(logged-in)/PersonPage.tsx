import PostCard from '@/components/Sections/PostCard';
import useStore from '@/hooks/useStore';

const PersonPage = () => {
  const {personPosts} = useStore((state) => state)
  return (
    <>
     <>
      {personPosts && personPosts.map((post:any) => {
       return <PostCard key={post._id} author= {post.author} content={post.content} createdAt={post.createdAt} images={post.images} timeLost={post.timeLost} placement= {post.placement} type={post.type} />
      })}
    </>
    </>
  );
};

export default PersonPage;
