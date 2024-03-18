import useStore from '@/hooks/useStore';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Separator } from '../ui/separator';

type Props = {
  conversationId : string,
  avatar: string,
  name: string,
  lastMessage: string
}

export default function ConversationItem({conversationId, avatar, name, lastMessage}: Props) {
  const {setConversationId} = useStore((state) => state)

  return(
    <div className='w-full flex flex-row my-2 gap-2 items-center cursor-pointer hover:bg-main rounded-xl' onClick={() =>setConversationId(conversationId)}>
                <Avatar>
                  <AvatarImage src={avatar} />
                  <AvatarFallback>{name}</AvatarFallback>
                </Avatar>
                  <div className='max-w-[200px]'>
                    <p className="text-lg font-semibold">{name}</p>
                    <p className='text-md font-light overflow-hidden whitespace-nowrap overflow-ellipsis'>{lastMessage}</p>
                  </div>
              </div>
  ) 
};
