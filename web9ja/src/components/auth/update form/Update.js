import React, { useState, useContext } from "react";
import classes from "../authHelper.module.css";
import myClasses from "../auth.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UserContext from "../../../store/user-context";
import AuthContext from "../../../store/auth-context";

const UpdateForm = () => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });

  const ctx = useContext(UserContext);
  const authCtx = useContext(AuthContext);

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
    console.log(ctx.userData);
    ctx.updateUser(userData, ctx.userData._id, authCtx.token);
    console.log(userData);
  };

  return (
    <div className={myClasses.container}>
      <div className={myClasses.imageBox}></div>
      <form className={classes.signUpForm} onSubmit={onSubmitHandler}>
        <h2>Update Your Information</h2>
        {
          <div className={classes.nameBox}>
            <input name="firstName" type="text" placeholder="First Name" onChange={changeHandler} d />
            <input name="lastName" type="text" placeholder="Last Name" onChange={changeHandler} d />
          </div>
        }

        <input name="email" type="email" placeholder="Email" onChange={changeHandler} disabled value={ctx.userData.email} />
        <input name="username" type="text" placeholder="Unique username" onChange={changeHandler} disabled value={ctx.userData.username} />
        <div className={classes.phone}>
          <div className={classes.selectPhoneBox}>
            <select name="countryCode" id="countryCode" className={classes.phoneCode}>
              <option value="+1">+1 (CA)</option>
              <option value="+1">+1 (US)</option>
            </select>
          </div>

          <input name="phone" type="text" placeholder="123456789" className={classes.phoneText} onChange={changeHandler} />
        </div>
        <input name="address" type="text" placeholder="Address" onChange={changeHandler} />
        <div className={classes.passwordContainer}>
          <input name="password" type={visible ? "text" : "password"} minLength={8} placeholder="********" onChange={changeHandler} disabled value={ctx.userData.password} />
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
          Update Your Info
        </button>
      </form>
    </div>
  );
};
export default UpdateForm;
//add profile pic
