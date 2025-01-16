import React, { useContext } from "react";
import { ImageCompContext } from "../App";
import { LuSearch } from "react-icons/lu";

const SearchField = () => {
  const { fetchData, searchImage, setSearchImage } =
    useContext(ImageCompContext);

  const handleInputChange = (e) => {
    setSearchImage(e.target.value);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `search/photos?page=1&query=${searchImage}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
      setSearchImage("");
    }
  };

  const handleButtonSearch = () => {
    fetchData(
      `search/photos?page=1&query=${searchImage}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    setSearchImage("");
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search Anything..."
        className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm 
                     text-white placeholder-gray-400 border border-white/20
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     transition duration-200"
        value={searchImage}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2
                         text-white/70 hover:text-white transition hover:cursor-pointer"
        onClick={handleButtonSearch}
      >
        <LuSearch />
      </button>
    </div>
  );
};

export default SearchField;
