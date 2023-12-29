import { useRef } from 'react';
import { toast } from 'react-toastify';

const Search = () => {
  const keywordRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex w-2/5 min-w-[150px] max-w-[600px] items-center gap-2">
      <input
        className="focus:ring-primaryColor w-full rounded-xl bg-secondary bg-white px-5 py-2.5 text-gray-400 ring-1 ring-inset ring-gray-400 focus:border-none focus:outline-none focus:ring-2 dark:bg-secondary"
        type="text"
        placeholder="Loại đồ vật, địa điểm,... Nhấn Enter"
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            if (keywordRef.current?.value) {
              toast.success(keywordRef.current?.value);
              keywordRef.current.value = '';
            }
          }
        }}
        ref={keywordRef}
      />
    </div>
  );
};

export default Search;
