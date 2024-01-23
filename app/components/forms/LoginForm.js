import React from "react";
import { signIn, useSession } from "next-auth/react";

const LoginForm = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <button onClick={() => signIn("google")}>Log In with Google</button>
    </div>
  );
};

export default LoginForm;
