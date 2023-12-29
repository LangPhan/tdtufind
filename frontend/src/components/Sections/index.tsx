import LeftSide from './LeftSide';
import MainSide from './MainSide';
import Navigation from './Navigation';
import RightSide from './RightSide';

const Section = () => {
  return (
    <>
      <Navigation />
      <section className="flex min-h-screen justify-center gap-10">
        <LeftSide />
        <MainSide />
        <RightSide />
      </section>
    </>
  );
};

export default Section;
