import PostCard from '@/components/Sections/PostCard';
import useStore from '@/hooks/useStore';

const ElementPage = () => {
  const {elementPosts} = useStore((state) => state)

  
  return (
    <>
      {elementPosts && elementPosts.map((post:any) => {
       return <PostCard key={post._id} author= {post.author} content={post.content} createdAt={post.createdAt} images={post.images} timeLost={post.timeLost} placement= {post.placement} type={post.type} />
      })}
    </>
  );
};

export default ElementPage;
