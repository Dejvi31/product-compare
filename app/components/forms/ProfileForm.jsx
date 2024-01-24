import React from "react";

const ProfileForm = ({ name, image, email }) => {
  return (
    <section className="flex items-center space-x-4 p-3">
      <section>
        <img
          src={image}
          alt={name}
          width={40}
          height={40}
          referrerPolicy="no-referrer"
          className="rounded-full"
        />
      </section>
      <section>
        <h2 className="text-lg font-semibold">Name: {name}</h2>
        <h2 className="text-gray-600">Email: {email}</h2>
      </section>
    </section>
  );
};

export default ProfileForm;
