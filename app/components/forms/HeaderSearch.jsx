import React from "react";

const HeaderSearch = ({
  value,
  onChange,
  placeholder,
  suggestions,
  onClearSearch,
}) => {
  const handleInputChange = (e) => {
    onChange(e);

    if (e.target.value.trim() === "") {
      onClearSearch();
    }
  };

  console.log(suggestions);
  return (
    <section className="flex items-center justify-center my-4 relative">
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleInputChange}
        className="block bg-white w-full max-w-md border border-slate-300 rounded-md mt-2 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-gray-800 focus:ring-gray-800 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-10 z-10 bg-white border border-slate-300 mt-1 w-full max-w-md rounded-md shadow-lg">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HeaderSearch;
