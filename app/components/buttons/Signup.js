"use client";
import React, { useState } from "react";
import SignupPopup from "../popup/SignupPopup.jsx";

const Signup = () => {
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const toggleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup);
  };

  return (
    <>
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded"
        onClick={toggleSignupPopup}
      >
        Sign Up
      </button>
      {showSignupPopup && <SignupPopup toggleSignupPopup={toggleSignupPopup} />}
    </>
  );
};

export default Signup;
