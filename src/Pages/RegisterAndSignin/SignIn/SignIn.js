import React, { useState } from "react";
import CustomButton from "../../../components/CustomBottom/CustomButton";
import FormInput from "../../../components/Form-input/FormInput";
import { SignInWithGoogle } from "../../../components/firebase/firebase";
import "./SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sign-in">
      <h2>I already have a acount</h2>
      <span> Sign IN with Email and Password</span>
      <form onSubmit={submithandler}>
        <FormInput
          type="email"
          value={email}
          changeHandler={(e) => setEmail(e.target.value)}
          required
          label="Email"
        />

        <FormInput
          type="password"
          value={password}
          changeHandler={(e) => setPassword(e.target.value)}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton onClick={SignInWithGoogle} googleSignIn={true}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
