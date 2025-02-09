import { MessageSquare } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import ConversationItem from './ConversationItem';

export default function Conversation() {
  return (
    <ScrollArea className="h-80 w-80 bg-background mt-5 rounded-md border px-2 py-2">
      <div className='max-w-80'>
        <div className='w-full max-w-full my-2 flex gap-1 items-center justify-center'>
          <MessageSquare className='w-5 h-5 font-bold mx-2' />
          <span className='font-bold text-xl'>Cuộc trò chuyện</span>
        </div>
        <Separator />
        <ConversationItem key={"abc"} avatar='https://github.com/shadcn.png' conversationId='abc' lastMessage='abc fasdfklajsfkl afldkasklfjalksfkj kjlfkdadslkfj alsdfjlk ' name='AbcDeC' />
        <ConversationItem key={"def"} avatar='https://github.com/shadcn.png' conversationId='def' lastMessage='yay' name='DEF' />
      </div>
    </ScrollArea>
  )
};
