import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon, DeleteIcon, ImageDownIcon, PackageSearch, Replace, Trash, UserSearch } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import ImageUploading, { ImageListType } from "react-images-uploading";
import useStore from '@/hooks/useStore'

const StForm = () => {
  const createNewPost = useStore((state) => state.createNewPost)

  const formSchema = z.object({
    type: z.string(),
    itemName: z.string().min(2, {
      message: 'Điền chính xác và đầy đủ tên đồ vật',
    }),
    placement: z.string().min(2, {
      message: 'Điền chính xác và đầy đủ nơi xảy ra',
    }),
    timeLost: z.date({
      required_error: 'Vui lòng chọn thời gian xảy ra',
    }),
    content: z
      .string()
      .max(10000, { message: 'Quá số lượng 10000 kí tự' })
      .min(2, { message: 'Tối thiểu 2 kí tự' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "true",
      itemName: '',
      placement: '',
      timeLost: new Date(Date.now()),
      content: '',
    },
  });
  
  const [images, setImages] = useState([]);
  const maxNumber = 5;

  const onChange = (
    imageList: ImageListType
  ) => {
    setImages(imageList as never[]);
  };
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("When btn clicked: ", form.formState.isSubmitting);
    
    const formData = new FormData();
    images && images.map((image) => {
      //@ts-ignore
      formData.append('images', image?.file)
    })
    formData.append('content', values.content)
    formData.append('timeLost', values.timeLost.toString())
    formData.append('type', values.itemName)
    formData.append('placement', values.placement)
    formData.append('isSomething', values.type)
    console.log(values.type);
    
    await createNewPost(formData)

  }
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Hãy điền đầy đủ và chính xác thông tin để mọi người có thể nhanh chóng
          nhận dạng và giúp đỡ bạn nhé!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bạn đang muốn</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true"><PackageSearch className='inline mr-1'/> tìm đồ vật mình đánh rơi</SelectItem>
                  <SelectItem value="false"><UserSearch className='inline mr-1'/> tìm người đánh rơi đồ vật</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
              control={form.control}
              name="itemName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên đồ vật</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Iphone 16 Pro Max, SS S20,..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="placement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nơi xảy ra</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Tòa A, Nhà xe Thư viện,..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
                control={form.control}
                name="timeLost"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Thời gian xảy</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Chọn ngày</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nội dung</FormLabel>
                  <Textarea placeholder="Chi tiết sự việc" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              maxFileSize={1024 * 1024 * 2}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            errors
          }) => (
          <div>
            <FormLabel className='block mb-2'>Hình ảnh</FormLabel>
            <Button
              type='button'
              className=''
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click hoặc kéo hình của bạn vào đây <ImageDownIcon className='ml-1'/>
            </Button>
            &nbsp;
            {images?.length > 0 && <Button type='button' variant="destructive"  onClick={onImageRemoveAll}>Xóa tất cả <Trash className='ml-1'/></Button>}
            { errors?.maxFileSize &&  <CardDescription className='text-red-500'> Dung lượng file hình ảnh cần bé hơn 2MB </CardDescription>}
            <div className='flex'>
              {imageList.map((image, index) => (
                <div key={index} className="my-5 w-1/2 flex flex-col items-center justify-around">
                  <img src={image.dataURL} alt={image.file?.name} width={'80%'} />
                  <div className="w-fit flex flex-end gap-5 my-2">
                    <button className='hover:text-main' title='Đổi hình' onClick={() => onImageUpdate(index)}><Replace/></button>
                    <button className='hover:text-danger' title='Xóa hình' onClick={() => onImageRemove(index)}><DeleteIcon/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
            </ImageUploading>
      <div className='w-full flex justify-center'>
            <Button type="submit" disabled={form.formState.isSubmitting}>{
              form.formState.isSubmitting ? "Đang đăng tải..." : "Đăng bài"
            }</Button>
      </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
    </Card>
  );
};

export default StForm;
