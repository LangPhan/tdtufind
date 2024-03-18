import { MessageSquare } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import ConversationItem from './ConversationItem';
import { Separator } from '../ui/separator';

export default function Conversation() {
  return (
      <ScrollArea className="h-80 w-80 bg-background mt-5 rounded-md border px-2 py-2">
        <div className='max-w-80'>
          <div className='w-fit max-w-full my-2 flex gap-2 items-center justify-center'>
            <MessageSquare className='w-6 h-6 font-bold mx-2'/>
            <span className='font-bold text-2xl'>Cuộc trò chuyện</span>
          </div>
          <Separator/>
          <ConversationItem key={"abc"} avatar='https://github.com/shadcn.png' conversationId='abc' lastMessage='abc fasdfklajsfkl afldkasklfjalksfkj kjlfkdadslkfj alsdfjlk ' name='ABC'/>
          <ConversationItem key={"def"} avatar='https://github.com/shadcn.png' conversationId='def' lastMessage='yay' name='DEF'/>
        </div>
      </ScrollArea>
  )
};
