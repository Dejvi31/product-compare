"use client";
import React from "react";
import LoginForm from "./LoginForm";
import { signOut, useSession } from "next-auth/react";
import ProfileForm from "./ProfileForm";
import Bookmark from "./Bookmark";

const Page = () => {
  const session = useSession();
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <section className="flex flex-col h-screen">
      {session.status === "authenticated" ? (
        <section className="flex justify-end ">
          <section className="flex flex-col items-end">
            <ProfileForm
              name={session.data.user?.name}
              email={session.data.user?.email}
            />
            <button
              className="bg-gray-500 hover:bg-gray-400 text-sm text-white p-2 rounded"
              onClick={() => handleLogout()}
            >
              Sign out
            </button>
          </section>
        </section>
      ) : (
        <LoginForm />
      )}
      {session.status === "authenticated" && (
        <section className="flex-1">
          <Bookmark />
        </section>
      )}
    </section>
  );
};

export default Page;
