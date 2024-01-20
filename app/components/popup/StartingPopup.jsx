import React from "react";
import Popup from "./Popup.jsx";

const StartingPopup = ({ closePopup }) => {
  return (
    <Popup onClose={closePopup}>
      <section>
        <h2>Welcome to our website!</h2>
        <p>This is your welcome popup content.</p>
      </section>
    </Popup>
  );
};

export default StartingPopup;
