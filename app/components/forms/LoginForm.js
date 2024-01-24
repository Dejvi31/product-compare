import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

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
    return (
      <>
        <section>
          <h3>Name: {session.data.user.name}</h3>
          <h3>Email: {session.data.user.email}</h3>
        </section>

        <button onClick={() => signOut("google")}>Sign out</button>
      </>
    );
  }

  return (
    <section>
      <button onClick={handleLogin}>Sign In with Google</button>
    </section>
  );
};

export default LoginForm;
