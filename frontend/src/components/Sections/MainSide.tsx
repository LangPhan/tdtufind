import { Outlet } from 'react-router-dom';

const MainSide = () => {
  return (
    <div className="w-full min-w-[650px] max-w-[760px] bg-white shadow-xl dark:bg-secondary">
      <Outlet />
    </div>
  );
};

export default MainSide;
