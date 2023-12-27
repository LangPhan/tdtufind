const Search = () => {
  return (
    <div className="flex w-1/3 items-center">
      <input
        className="w-full rounded-xl px-5 py-2.5 text-gray-400 ring-1 ring-inset ring-gray-400 focus:border-none focus:outline-none focus:ring-2 focus:ring-primaryColor"
        type="text"
        placeholder="Tìm kiếm..."
      ></input>
    </div>
  );
};

export default Search;
