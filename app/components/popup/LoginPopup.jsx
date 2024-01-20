import React from "react";
import Popup from "./Popup.jsx";

const LoginPopup = ({ toggleLoginPopup }) => {
  return (
    <Popup onClose={toggleLoginPopup}>
      <section>
        <h2 className="text-gray-600">Login</h2>
      </section>
    </Popup>
  );
};

export default LoginPopup;
