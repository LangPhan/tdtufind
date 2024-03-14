import { MessageIcon, PlusIcon } from '../ui/icons';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Profile from './Profile';
import { ModeToggle } from '../ui/mode-toggle';
import PostDialog from '../PostDialog';

const Personal = () => {
  return (
    <div className="flex w-1/3 items-center justify-center gap-5">
      <TooltipProvider delayDuration={350}>
        <Tooltip>
          <TooltipTrigger>
            <PostDialog />
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white">
            Đăng tin mới
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <MessageIcon className="h-6 w-6 hover:cursor-pointer" />
      <ModeToggle />
      <Profile />
    </div>
  );
};

export default Personal;
