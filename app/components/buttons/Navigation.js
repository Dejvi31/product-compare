"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navigation = ({ categories }) => {
  const router = useRouter();

  const navigateToCategory = (category) => {
    if (category.toLowerCase() === "home") {
      router.push("/");
    } else {
      router.push(`/${category.toLowerCase()}`);
    }
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mx-1 my-1 py-2 px-4 rounded-r"
          key={category}
          onClick={() => navigateToCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
