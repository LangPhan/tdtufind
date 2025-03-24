import { Loader2 } from "lucide-react"

const Loading = () => {
  return (
    <div className="w-full w- h-full flex justify-center items-center">
      <Loader2 className="size-8 text-main animate-spin" />
    </div>
  )
}

export default Loading