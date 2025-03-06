import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ScrollArea } from "@/components/ui/scroll-area"

import useStore from "@/hooks/useStore"
import instance from "@/utils/axiosConfig"
import { Inbox, SendHorizonal, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { io } from 'socket.io-client'
import { Textarea } from "../ui/textarea"
import TextMessage from "./ui/TextMessage"

const socket = io('http://localhost:5001');

export default function Message() {
  const { conversation, setConversationId, messageList, getLatestMessage, user } = useStore((state) => state)
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  const viewRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    const view = viewRef.current
    if (view) {
      view.scrollIntoView({ behavior: "auto", block: 'end' })
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation, messageList]);

  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (conversation.id) {
      socket.emit('join room', conversation.id)
    }
    socket.on('connect', () => {
      setIsSocketConnected(true);
      console.log("Connected");
    });
    socket.on('disconnect', () => {
      setIsSocketConnected(false);
      console.log("Disconnected");
    });
    socket.on('chat message', (msg: any) => {
      getLatestMessage(msg)
    });
    return () => {
      socket.removeAllListeners()
    }
  }, [conversation]);

  const sendMessage = async () => {
    const input = inputRef.current
    if (input && input.value !== '') {
      try {
        const messageData = {
          conversation: conversation.id,
          sender: user?.id || "",
          content: input.value
        };
        const res = await instance.post("messages", JSON.stringify(messageData), {
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (res.status === 201) {
          socket.emit('chat message', { message: res.data.data._id, conversationId: conversation.id })
        }
      } catch (error) {
        console.log(error);
      } finally {
        input.value = '';
      }
    }
  }

  return (
    <div className="text-white w-72 h-fit bg-background rounded-t-2xl fixed bottom-0 right-[10%]">
      {conversation?.id.length > 0 && <Collapsible defaultOpen={true} >
        <CollapsibleTrigger asChild>
          <div className="w-full h-10 rounded-t-2xl bg-main flex justify-between items-center px-2">
            <span className="ml-2 font-medium text-lg">{conversation.name}</span>
            <div className="flex items-center">
              <button>
                <X className="hover:text-red-500 w-5 " onClick={() => setConversationId("", "", "")} />
              </button>
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ScrollArea className="h-[320px] max-w-full rounded-t-md border p-4">
            <div className="w-full h-full flex flex-col-reverse">
              {messageList && messageList.length > 0 && messageList.map((message: any) => {
                return (
                  <TextMessage key={message._id} avatar={conversation.avatar} content={message.content} isOwnText={message.sender === user?.id} />
                )
              }
              )}
              {
                messageList.length === 0 && (
                  <div className="w-full h-full flex flex-col items-center text-slate-400">
                    <Inbox className="w-24 h-24" />
                    <span>Chưa có tin nhắn nào</span>
                  </div>
                )
              }
            </div>
            <div ref={viewRef}></div>
          </ScrollArea>
          <div className="relative">
            <Textarea ref={inputRef} className="text-black dark:text-white rounded-t-none resize-none pr-10 min-h-0 custom-scrollbar" placeholder="Nhập tin nhắn" rows={2} cols={2} onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }} />
            <button
              onClick={() => sendMessage()}
              className="absolute bottom-0 right-0 -translate-y-[17px] -translate-x-[8px]">
              <SendHorizonal className="text-main" />
            </button>
          </div>
        </CollapsibleContent>
      </Collapsible>}
      <div className="text-center mt-2">
        {isSocketConnected ? (
          <span className="text-green-500">Socket Connected</span>
        ) : (
          <span className="text-red-500">Socket Disconnected</span>
        )}
      </div>
    </div>
  )
};