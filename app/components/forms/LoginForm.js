import React from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleLogin = async () => {
    try {
      const result = await signIn("google");

      console.log("Full Result Object:", result);

      if (result?.error) {
        console.error("Error during login:", result.error);
        return;
      }

      if (result?.user?.email) {
        console.log("Email:", result.user.email);
      } else {
        console.error("Email not found in the result object.");
      }
    } catch (error) {
      console.error("Unhandled error during login:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In with Google</button>
    </div>
  );
};

export default LoginForm;
