import HomePage from "./Pages/Homepage/HomePage";
import "./App.css";
import Shop from "./Pages/Shop/Shop";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Signin from "./Pages/RegisterAndSignin/SignIn/SignIn";
import { auth } from "./components/firebase/firebase";
import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState("");
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((u) => {
      setUser(u);
      console.log(u);
    });
  }, []);

  useEffect(() => {
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/signin" exact component={Signin} />
    </div>
  );
};

export default App;
