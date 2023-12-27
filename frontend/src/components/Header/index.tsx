import Logo from './Logo';
import Personal from './Personal';
import Search from './Search';

const Header = () => {
  return (
    <header className="flex h-16 flex-row justify-center gap-44 shadow-xl xl:gap-56 2xl:gap-80">
      <Logo />
      <Search />
      <Personal />
    </header>
  );
};

export default Header;
