import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { convertTimeToDMY, countTimeAgo } from '@/utils/convertTime';
import {
  Building,
  PackageSearch,
  SendHorizonal,
  Share,
  TimerIcon,
} from 'lucide-react';
type Post = {
  author: {
    email: string, 
    fullName: string,
    _id: string
  },
  content: string,
  createdAt: string,
  images: string[],
  placement: string,
  timeLost: string,
  type: string
}

const PostCard = ({author, content, createdAt, images, placement, timeLost, type}: Post) => {
  return (
    <Card className="mx-2 my-5 cursor-default">
      <CardHeader>
        <div className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarImage src="https://lh3.google.com/u/0/ogw/ANLem4bTzCJj4ciirQ34JuG382gBPPlpCfZiTe1hvoXn=s32-c-mo" />
            <AvatarFallback>{author.fullName}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">{author.fullName}</span>
            <span className="text-sm italic">{countTimeAgo(createdAt)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <div
          className="bg-main flex w-1/3 flex-row items-center gap-2 rounded-xl px-2 py-4 text-white"
          title="Thời gian xảy ra"
        >
          <span className="">
            <TimerIcon />
          </span>
          <span>{convertTimeToDMY(timeLost)}</span>
        </div>
        <div
          className="bg-main flex w-1/3 flex-row items-center gap-2 rounded-xl px-2 py-4 text-white"
          title="Loại đồ vật"
        >
          <span className="">
            <PackageSearch />
          </span>
          <span>{type}</span>
        </div>
        <div
          className="bg-main flex w-1/3 flex-row items-center gap-2 rounded-xl px-2 py-4 text-white"
          title="Địa điểm xảy ra"
        >
          <span className="">
            <Building />
          </span>
          <span>{placement}</span>
        </div>
      </CardContent>
      <CardContent>
        {content}
      </CardContent>
      {images.length > 0 && <CardContent>
        <Carousel className="">
          <CarouselContent>
            {images.length > 0 && images.map((image: any) => {
              return(
              <CarouselItem key={image}>
                <img
                  src={image}
                  alt="image"
                />
              </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-0" />
          <CarouselNext className="-right-0" />
        </Carousel>
      </CardContent>}
      <CardFooter className="flex justify-around">
        <Button className="inline-flex gap-2 bg-blue-600 text-white hover:bg-blue-700">
          Chia sẻ
          <Share className="h-5 w-5" />
        </Button>
        <Button className="inline-flex gap-2 bg-green-600 text-white hover:bg-green-700">
          Nhắn tin <SendHorizonal className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
