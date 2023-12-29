import { HeartHandshake, UserSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

const Navigation = () => {
  return (
    <nav className="sticky top-[62px] z-40 flex h-fit w-full min-w-fit flex-row justify-center gap-10 overflow-hidden bg-background">
      <div className="w-1/3 bg-transparent"></div>
      <Tabs
        defaultValue="find"
        className="w-full min-w-[650px] max-w-[760px] bg-white dark:bg-secondary"
      >
        <TabsList className="h-12 w-full">
          <Link to={'/'} className="w-full">
            <TabsTrigger
              className="flex h-full w-full items-center gap-2 text-base font-semibold"
              value="find"
            >
              <UserSearch />
              <span>Tìm kiếm đồ vật</span>
            </TabsTrigger>
          </Link>
          <Link to={'/person'} className="w-full">
            <TabsTrigger
              className="flex h-full w-full items-center gap-2 text-base font-semibold"
              value="give"
            >
              <HeartHandshake />
              <span>Trao trả</span>
            </TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
      <div className="w-1/3 bg-transparent"></div>
    </nav>
  );
};

export default Navigation;
