import { useNavigate } from 'react-router-dom';
import useStore from '../../../hooks/useStore';
import { LogoutIcon, SettingIcon, UserIcon } from '../../ui/icons';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
const Profile = () => {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  return (
    <div className="group relative flex h-full min-w-[150px] items-center gap-2 hover:cursor-pointer">
      <Avatar>
        <AvatarImage src={user?.avatar} />
        <AvatarFallback>TDT</AvatarFallback>
      </Avatar>
      <p className="">{user?.fullName}</p>
      <div className="invisible absolute top-[64px] z-[60] w-[100%] rounded-lg bg-white px-5 py-4 shadow-lg transition-all hover:visible group-hover:visible dark:bg-secondary">
        <ul className="flex flex-col gap-2 ">
          <li className="flex items-center  hover:font-bold">
            <UserIcon className="mr-2 inline-block h-5 w-5" />
            <p className="inline-block">Hồ sơ</p>
          </li>
          <li className="flex items-center  hover:font-bold">
            <SettingIcon className="mr-2 inline-block h-5 w-5" />
            <p className="inline-block">Cài đặt</p>
          </li>
          <li className="flex items-center text-red-600 hover:font-bold">
            <LogoutIcon className="mr-2 inline-block h-5 w-5" />
            <p className="inline-block" onClick={() => logout(navigate)}>
              Đăng xuất
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
