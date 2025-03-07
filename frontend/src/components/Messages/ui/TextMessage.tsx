import { Avatar, AvatarImage } from "@/components/ui/avatar";

type Props = {
  avatar: string,
  content: string,
  isOwnText: boolean
  isSameOwner: boolean,
}
export default function TextMessage({ avatar, content, isOwnText, isSameOwner }: Props) {
  return (
    <div className={`w-full flex items-center gap-1 animate-in ${isOwnText ? "justify-end" : ""}`}>
      {(!isOwnText) && <Avatar>
        <AvatarImage
          className={`${isSameOwner && "invisible"} p-0.5 rounded-full`}
          src={avatar} />
      </Avatar>}
      <span className={`max-w-fit h-fit px-2 py-1.5 my-0.5 rounded-[0.8rem] ${isOwnText ? "bg-blue-500" : "bg-green-500"}`}>
        {content}
      </span>
    </div>
  )
};
