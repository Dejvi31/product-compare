import React from "react";
import Login from "../components/buttons/Login";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed w-full top-0 z-10 ">
      <section className="flex items-center">
        <span className="text-xl font-bold cursor-pointer">Logo</span>
      </section>

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

      <section className="flex items-center">
        <Login />
        <button className="bg-gray-700 hover:bg-gray-400 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </section>
    </header>
  );
};

export default Header;
