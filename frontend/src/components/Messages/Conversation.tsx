import { Inbox, MessageSquare } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import ConversationItem from './ConversationItem';
import { Separator } from '../ui/separator';
import useStore from '@/hooks/useStore';
import { useEffect } from 'react';

export default function Conversation() {
  const {conversationList , setConversationList , user, setNewConversation} = useStore((state) => state)
  useEffect(() => {
    setConversationList()
    // setNewConversation('65f936a65011a03b4b36ead2','')
  }, [])
  return (
      <ScrollArea className="h-80 w-80 bg-background mt-5 rounded-md border px-2 py-2">
        <div className='max-w-80'>
          <div className='w-full max-w-full my-2 flex gap-1 items-center justify-center'>
            <MessageSquare className='w-5 h-5 font-bold mx-2'/>
            <span className='font-bold text-xl'>Cuộc trò chuyện</span>
          </div>
          <Separator/>
          {conversationList.length > 0 && 
            conversationList.map((conversation:any) => {
              const opt = conversation.members.filter((member:any) => member._id !== user?.id)[0]
              return(
                <ConversationItem key={conversation._id} avatar= {opt?.avatar} conversationId={conversation._id} lastMessage= {conversation?.messageLatest?.content} name={opt?.fullName} lastSender={conversation?.messageLatest?.sender._id}/>
              )
            })
          }
          {
            conversationList.length === 0 && (
              <div className="w-full h-full flex flex-col items-center text-slate-400">
                  <Inbox className="w-24 h-24"/>
                  <span>Chưa có tin nhắn nào</span>
                </div>
            )
          }
        </div>
      </ScrollArea>
  )
};