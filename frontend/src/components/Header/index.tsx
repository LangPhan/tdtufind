import Logo from './Logo';
import Personal from './Personal';
import Search from './Search';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full flex-row justify-evenly gap-6 bg-white shadow-lg dark:bg-secondary">
      <Logo />
      <Search />
      <Personal />
    </header>
  );
};

export default Header;
