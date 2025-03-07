import { Skeleton } from "@/components/ui/skeleton"

const ConversationItemSkeleton = () => {
  return (
    <div className="w-full flex flex-row my-2 px-2 py-2 gap-2 items-center cursor-pointer rounded-xl">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export default ConversationItemSkeleton