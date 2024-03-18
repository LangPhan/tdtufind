import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { ScrollArea } from "@/components/ui/scroll-area"

import { SendHorizonal, X } from "lucide-react"
import TextMessage from "./ui/TextMessage"
import { Textarea } from "../ui/textarea"
import useStore from "@/hooks/useStore"


export default function Message() {

  const {conversationId, setConversationId}  = useStore((state) => state) 
  return(
  <div className="w-72 h-fit bg-background rounded-t-2xl fixed bottom-0 right-[10%]">
    {conversationId.length > 0 && <Collapsible defaultOpen = {true} >
      <CollapsibleTrigger asChild>
        <div className="w-full h-10 rounded-t-2xl bg-main flex justify-between items-center px-2">
          <span className="ml-2 font-medium text-lg">Name</span>
          <div className="flex items-center">
            <button>
              <X className="hover:text-red-500" onClick={() => setConversationId("")}/>
            </button>
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ScrollArea className="h-[320px] max-w-full rounded-t-md border p-4">
          <TextMessage avatar="https://github.com/shadcn.png" content="abc" isOwnText = {true}/>
          <TextMessage avatar="https://github.com/shadcn.png" content="abc" isOwnText = {false}/>
        </ScrollArea>
        <div className="relative">
          <Textarea className="rounded-t-none resize-none pr-10 min-h-0 custom-scrollbar" placeholder="Nhập tin nhắn" rows={2} cols={2}  />
          <button className="absolute bottom-0 right-0 -translate-y-[17px] -translate-x-[8px]">
            <SendHorizonal/>
          </button>
        </div>
      </CollapsibleContent>
    </Collapsible>}
  </div>
 ) 
};
