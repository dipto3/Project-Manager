import { SearchContext } from "../../context/SearchContext";
import { useState,useContext } from "react";
export default function Search() {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <>
      <div className="mx-4 flex-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        />
      </div>
    </>
  );
}
