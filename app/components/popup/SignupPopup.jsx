import React from "react";
import Popup from "./Popup.jsx";

const SignupPopup = ({ toggleSignupPopup }) => {
  return (
    <Popup onClose={toggleSignupPopup}>
      <section>
        <h2 className="text-gray-600">Sign Up</h2>
      </section>
    </Popup>
  );
};

export default SignupPopup;
