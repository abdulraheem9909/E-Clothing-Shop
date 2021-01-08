import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, googleSignIn, ...otherprops }) => {
  // console.log('button',googleSignIn)
  return (
    <button
      className={`${googleSignIn ? "google-sign-in " : ""}custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
