"use client";
import React, { useState } from "react";
import LoginPopup from "../popup/LoginPopup.jsx";

const Login = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <>
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded"
        onClick={toggleLoginPopup}
      >
        Log In
      </button>
      {showLoginPopup && <LoginPopup toggleLoginPopup={toggleLoginPopup} />}
    </>
  );
};

export default Login;
