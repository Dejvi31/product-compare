// LoginForm.js
import React from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleLogin = async () => {
    try {
      const result = await signIn("google");

      if (result && result.error) {
        console.error("Error during login:", result.error);

        // If available, log the error message and stack trace
        console.error("Error message:", result.error.message);
        console.error("Stack trace:", result.error.stack);

        // If it's an authentication error, log specific details
        if (result.error.name === "AuthenticationError") {
          console.error("Authentication error code:", result.error.code);
          console.error("Authentication error data:", result.error.data);
        }
      } else {
        console.log("Result:", result);
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
