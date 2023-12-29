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
import {
  Building,
  PackageSearch,
  SendHorizonal,
  Share,
  TimerIcon,
} from 'lucide-react';

const PostCard = () => {
  return (
    <Card className="mx-2 my-5 cursor-default">
      <CardHeader>
        <div className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarImage src="https://lh3.google.com/u/0/ogw/ANLem4bTzCJj4ciirQ34JuG382gBPPlpCfZiTe1hvoXn=s32-c-mo" />
            <AvatarFallback>TDT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">First Name Last Name</span>
            <span className="text-sm italic">Day Month Year</span>
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
          <span>Lorem</span>
        </div>
        <div
          className="bg-main flex w-1/3 flex-row items-center gap-2 rounded-xl px-2 py-4 text-white"
          title="Loại đồ vật"
        >
          <span className="">
            <PackageSearch />
          </span>
          <span>Name</span>
        </div>
        <div
          className="bg-main flex w-1/3 flex-row items-center gap-2 rounded-xl px-2 py-4 text-white"
          title="Địa điểm xảy ra"
        >
          <span className="">
            <Building />
          </span>
          <span>Name</span>
        </div>
      </CardContent>
      <CardContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        perspiciatis cumque eaque velit, recusandae ut doloribus nihil. Fugiat
        non temporibus minus assumenda, magnam vero ab ad nisi repudiandae rem
        quasi!
      </CardContent>
      <CardContent>
        <Carousel className="">
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://plus.unsplash.com/premium_photo-1682125831761-ba29ea80603a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
              />
            </CarouselItem>
            <CarouselItem className="h-[400px]">
              <img
                className="object-scale-down object-center hover:cursor-grab"
                src="https://images.unsplash.com/photo-1703210466493-994109aec84f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image2"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="-left-0" />
          <CarouselNext className="-right-0" />
        </Carousel>
      </CardContent>
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
