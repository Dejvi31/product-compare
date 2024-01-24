"use client";
import React, { useState } from "react";
import LoginPopup from "../popup/LoginPopup.jsx";
import { useSession } from "next-auth/react";

const Login = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const session = useSession();

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <>
      <button
        className="bg-gray-800 hover:bg-gray-400 text-white px-4 py-2 rounded"
        onClick={toggleLoginPopup}
      >
        {session.status === "authenticated" ? (
          <img
            src={session.data.user.image}
            alt={session.data.user.name}
            width={40}
            height={40}
            referrerPolicy="no-referrer"
            className="rounded-full"
          />
        ) : (
          "Sign In"
        )}
      </button>
      {showLoginPopup && <LoginPopup toggleLoginPopup={toggleLoginPopup} />}
    </>
  );
};

export default Login;
