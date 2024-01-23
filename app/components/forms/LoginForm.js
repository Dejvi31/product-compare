import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const LoginForm = () => {
  const session = useSession();

  const handleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "http://localhost:3000/api/auth/callback/google",
      });
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <>
        <section>
          <h3>Name: {session.data.user.name}</h3>
          <h3>Email: {session.data.user.email}</h3>
        </section>

        <button onClick={() => signOut("google")}>Log out</button>
      </>
    );
  }

  return (
    <section>
      <button onClick={handleLogin}>Log In with Google</button>
    </section>
  );
};

export default LoginForm;
