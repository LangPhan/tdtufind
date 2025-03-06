import useStore from '@/hooks/useStore';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Props = {
  conversationId: string,
  avatar: string,
  name: string,
  lastMessage: string,
  lastSender: string,
}

export default function ConversationItem({ conversationId, avatar, name, lastMessage, lastSender }: Props) {
  const { setConversationId, user } = useStore((state) => state)

  return (
    <div className='w-full flex flex-row my-2 px-2 py-2 gap-2 items-center cursor-pointer hover:bg-main rounded-xl hover:text-white hover:transition-all duration-100' onClick={() => setConversationId(conversationId, name, avatar)}>
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
      <div className='max-w-[200px]'>
        <p className="text-md font-semibold">{name}</p>
        <p className='text-md font-light overflow-hidden whitespace-nowrap overflow-ellipsis'>{`${lastSender === user?.id ? "Bạn: " : ""
          }${lastMessage ? lastMessage : ""}`}</p>
      </div>
    </div>
  )
};
