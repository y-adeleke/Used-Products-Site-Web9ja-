import React, { useState, useContext } from "react";
import classes from "../authHelper.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UserContext from "../../../store/user-context";

const SignUp = () => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phone: "",
    address: "",
    password: "",
  });

  const ctx = useContext(UserContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    userData.bio = "";
    userData.profilePicture = "";
    ctx.signUp(userData);
    console.log(userData);
  };

  return (
    <form className={classes.signUpForm} onSubmit={onSubmitHandler}>
      <div className={classes.nameBox}>
        <input name="firstName" type="text" placeholder="First Name" required onChange={changeHandler} />
        <input name="lastName" type="text" placeholder="Last Name" required onChange={changeHandler} />
      </div>

      <input name="email" type="email" required placeholder="Email" onChange={changeHandler} />
      <input name="username" type="text" placeholder="Unique username" required onChange={changeHandler} />
      <div className={classes.phone}>
        <div className={classes.selectPhoneBox}>
          <select name="countryCode" id="countryCode" required className={classes.phoneCode}>
            <option value="+1">+1 (CA)</option>
            <option value="+1">+1 (US)</option>
          </select>
        </div>

        <input name="phone" type="text" placeholder="123456789" required className={classes.phoneText} onChange={changeHandler} />
      </div>
      <input name="address" type="text" placeholder="Address" required onChange={changeHandler} />
      <div className={classes.passwordContainer}>
        <input name="password" type={visible ? "text" : "password"} minLength={8} placeholder="********" required onChange={changeHandler} />
        {visible && (
          <VisibilityIcon
            className={classes.passIcon}
            onClick={() => {
              setVisible(false);
            }}
          />
        )}
        {!visible && (
          <VisibilityOffIcon
            className={classes.passIcon}
            onClick={() => {
              setVisible(true);
            }}
          />
        )}
      </div>

      <button type="submit" className={classes.submitBtn}>
        Sign Up
      </button>
      <p className={classes.terms}>
        By tapping “Sign up” you agree to WEB9JA’s <span>Terms & Conditions </span> and <span>Privacy Policy</span>.
      </p>
    </form>
  );
};
export default SignUp;

/*
  profilePicture: "",
*/
