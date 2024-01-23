"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const session = useSession();
  console.log(session);
  return (
    <section>
      <button onClick={() => signIn("google")}>Log In with Google</button>
    </section>
  );
};

export default page;
