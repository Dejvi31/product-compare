import React from "react";
import Popup from "./Popup.jsx";
import LoginForm from "../forms/LoginForm.js";

const LoginPopup = ({ toggleLoginPopup }) => {
  return (
    <Popup onClose={toggleLoginPopup}>
      <section className="text-gray-600">
        <LoginForm />
      </section>
    </Popup>
  );
};

export default LoginPopup;
