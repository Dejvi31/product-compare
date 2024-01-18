import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold">Logo</span>
        <nav className="ml-4">
          <a href="/" className="hover:text-gray-300 px-2">
            Home
          </a>
          <a href="/tv" className="hover:text-gray-300 px-2">
            TV
          </a>
          <a href="/phone" className="hover:text-gray-300 px-2">
            Phone
          </a>
        </nav>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Log In
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
