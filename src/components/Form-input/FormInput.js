import React from "react";
import "./FormInput.scss";

const FormInput = ({ changeHandler, label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={changeHandler} {...otherprops} />
      {label ? (
        <label
          className={`${
            otherprops.value.lenght ? "shrink" : ""
          }form-input-label `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
