import Login from "./login form/Login";
import SignUp from "./signup form/SignUp";
import { useState } from "react";
import classes from "./auth.module.css";

const Auth = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const signupBtnHandler = () => {
    setShowSignIn(false);
  };

  const signinBtnHandler = () => {
    setShowSignIn(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.imageBox}></div>
      <div className={classes.formBox}>
        <h2>WEB9JA</h2>
        <div className={classes.btnContainer}>
          <button onClick={signupBtnHandler} className={`${!showSignIn && classes.btnActive} ${!showSignIn && classes.moveInRight}`}>
            Sign Up
          </button>
          <button onClick={signinBtnHandler} className={`${showSignIn && classes.btnActive}`}>
            Sign In
          </button>
        </div>
        {!showSignIn && <SignUp />}
        {showSignIn && <Login />}
      </div>
    </div>
  );
};
export default Auth;
