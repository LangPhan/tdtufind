import { useNavigate } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import { LogoutIcon, MessageIcon, SettingIcon, UserIcon } from '../ui/icons';

const Personal = () => {
  const { user, logout } = useStore();
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-5">
      <MessageIcon className="h-6 w-6 hover:cursor-pointer" />
      <div className="group relative flex h-full items-center gap-2 hover:cursor-pointer">
        <img className="rounded-full" src={user?.avatar} alt="avatar" />
        <p className="font-semibold text-slate-600">{user?.fullName}</p>
        <div className="invisible absolute top-[64px] z-50 w-[150%] rounded-lg bg-white px-5 py-4 shadow-lg transition-all hover:visible group-hover:visible">
          <ul className="flex flex-col gap-2 ">
            <li className="flex items-center text-slate-600 hover:font-bold hover:text-black">
              <UserIcon className="mr-2 inline-block h-5 w-5" />
              <p className="inline-block">Hồ sơ</p>
            </li>
            <li className="flex items-center text-slate-600 hover:font-bold hover:text-black">
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
    </div>
  );
};

export default Personal;
