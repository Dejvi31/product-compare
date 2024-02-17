import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfileForm from "./ProfileForm";
import Bookmark from "./Bookmark";

const LoginForm = () => {
  const session = useSession();

  const handleLogin = async (provider) => {
    try {
      await signIn(provider);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <>
        <ProfileForm
          name={session.data.user.name}
          email={session.data.user.email}
          image={session.data.user.image}
        />
        <section className="flex items-center justify-center">
          <button
            className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded"
            onClick={() => handleLogout()}
          >
            Sign out
          </button>
        </section>
        <Bookmark />
      </>
    );
  }

  return (
    <section>
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded"
        onClick={() => handleLogin("google")}
      >
        Sign In with Google
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded"
        onClick={() => handleLogin("facebook")}
      >
        Sign In with Facebook
      </button>
      <button
        className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded"
        onClick={() => handleLogin("instagram")}
      >
        Sign In with Instagram
      </button>
    </section>
  );
};

export default LoginForm;
