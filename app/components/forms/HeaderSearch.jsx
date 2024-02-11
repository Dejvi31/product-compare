import React from "react";
import SuggestionsList from "./SuggestionsList";

const HeaderSearch = ({
  value,
  onChange,
  placeholder,
  suggestions,
  onClearSearch,
  onScrapedProductSelect,
}) => {
  const handleInputChange = (e) => {
    onChange(e);

    if (e.target.value.trim() === "") {
      onClearSearch();
    }
  };

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
        <SuggestionsList
          suggestions={suggestions}
          onScrapedProductSelect={onScrapedProductSelect}
        />
      )}
    </section>
  );
};

export default HeaderSearch;
