import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Props = {
  avatar: string,
  content: string,
  isOwnText: boolean
}
export default function TextMessage({avatar, content, isOwnText}: Props) {
 return(
  <div className={`w-full flex items-end gap-2 ${isOwnText ? "justify-end" : ""}`}>
    {!isOwnText && <Avatar>
      <AvatarImage src={avatar} />
    </Avatar>}
    <span className={`max-w-fit h-fit px-2 py-2 rounded-2xl ${isOwnText ? "bg-blue-500" : "bg-green-500"}`}>
      {content}
    </span>
  </div>
 ) 
};
