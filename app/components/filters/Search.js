import React from "react";

const Search = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      name="search"
      value={value}
      onChange={onChange}
      className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      placeholder={placeholder}
    />
  );
};

export default Search;
