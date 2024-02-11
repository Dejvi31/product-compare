import React from "react";
import Link from "next/link";

const SuggestionsList = ({ suggestions, onScrapedProductSelect }) => {
  return (
    <section className="absolute top-10 z-10 bg-white border border-slate-300 mt-1 w-full max-w-md rounded-md shadow-lg">
      {suggestions.map((suggestion) => (
        <Link
          key={suggestion.id}
          href={`/${suggestion.name.replace(/\s+/g, "-").toLowerCase()}`}
          onClick={() => onScrapedProductSelect(suggestion.id)}
        >
          <section className="flex mb-1 hover:bg-gray-100">
            <img src={suggestion.image} alt={suggestion.name} width={20} />
            <p className="text-xs py-2 px-4 cursor-pointer ">
              {suggestion.name}
            </p>
          </section>
        </Link>
      ))}
    </section>
  );
};

export default SuggestionsList;
