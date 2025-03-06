import useStore from '@/hooks/useStore';
import { useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../../components/Sections';

export default function HomePage() {
  const { fetchPosts } = useStore((state) => state)
  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}
