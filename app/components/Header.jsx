import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed w-full top-0 z-10">
      <div className="flex items-center">
        <span className="text-xl font-bold cursor-pointer">Logo</span>
      </div>

      <nav className="flex items-center space-x-4 justify-center">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/tv" className="hover:text-gray-300">
          TV
        </a>
        <a href="/phone" className="hover:text-gray-300">
          Phone
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded">
          Log In
        </button>
        <button className="bg-gray-700 hover:bg-gray-400 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;