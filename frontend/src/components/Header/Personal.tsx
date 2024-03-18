import { MessageIcon } from '../ui/icons';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import Profile from './Profile';
import { ModeToggle } from '../ui/mode-toggle';
import PostDialog from '../PostDialog';
import { Popover } from '../ui/popover';
import { PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import Conversation from '../Messages/Conversation';
import useStore from '@/hooks/useStore';


const Personal = () => {
  const { isOpenConversation, setIsOpenConversation } = useStore((state) => state)
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
      <Popover open = {isOpenConversation} >
        <PopoverTrigger onClick={() => setIsOpenConversation()}>
          <MessageIcon className={`h-6 w-6 hover:cursor-pointer ${isOpenConversation && "text-main"}`}/>
        </PopoverTrigger>
        <PopoverContent onBlur={() => setIsOpenConversation()}>
          <Conversation/> 
        </PopoverContent>
      </Popover>
      <ModeToggle />
      <Profile />
    </div>
  );
};

export default Personal;
