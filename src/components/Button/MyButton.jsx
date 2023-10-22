import React from "react";
import './mybutton.css'
const MyButton = ({buttonText}) => {
  return (
    <button className="global-button">
      <b>{buttonText}</b>
    </button>
  );
};

export default MyButton;
