import { Link } from 'react-router-dom';
import LOGO_LAND from '../../assets/LOGO_LAND.svg';
const Logo = () => {
  return (
    <div className="relative h-full hover:cursor-pointer">
      <Link to={'/'}>
        <img className="h-full" src={LOGO_LAND} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
