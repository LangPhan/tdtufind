import { Link } from 'react-router-dom';
import LOGO_LAND from '../../assets/LOGO_LAND.svg';

const Logo = () => {
  return (
    <div className="relative flex h-full w-1/3 justify-center gap-2 hover:cursor-pointer">
      <Link to={'/'}>
        <img className="h-full min-w-[128px]" src={LOGO_LAND} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
