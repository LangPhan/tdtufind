import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { PlusIcon } from 'lucide-react';
import Form from './Forms';

const PostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="h-10 w-10 rounded-full bg-main px-2 py-2"
      >
        <PlusIcon className="text-white" />
      </DialogTrigger>
      <DialogContent className="custom-scrollbar max-h-[90%] min-w-[40%] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            Bài đăng mới
          </DialogTitle>
        </DialogHeader>
        <Form />
      </DialogContent>
    </Dialog>
  );
};

export default PostDialog;
