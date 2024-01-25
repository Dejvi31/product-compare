import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfileForm from "./ProfileForm";

const LoginForm = () => {
  const session = useSession();

  const handleLogin = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (session.status === "authenticated") {
    console.log(session.data.user);
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
            onClick={() => signOut("google")}
          >
            Sign out
          </button>
        </section>
      </>
    );
  }

  return (
    <section>
      <button
        className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        Sign In with Google
      </button>
    </section>
  );
};

export default LoginForm;
