import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from '../../components/Sections';
import { useEffect } from 'react';
import useStore from '@/hooks/useStore';

export default function HomePage() {
  const {fetchPosts} = useStore((state) => state)
  useEffect(() => {
    fetchPosts()
  },[])
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}
