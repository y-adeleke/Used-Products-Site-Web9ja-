import { React, useState, useContext } from "react";
import classes from "../authHelper.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AuthContext from "../../../store/auth-context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const res = await authCtx.signIn(userData.email, userData.password);
    if (res) {
      navigate("/ads");
    }
    console.log(userData);
  };

  return (
    <form className={classes.signUpForm} onSubmit={onSubmitHandler}>
      <input type="email" name="email" required placeholder="Email" onChange={changeHandler} />
      <div className={classes.passwordContainer}>
        <input name="password" type={visible ? "text" : "password"} placeholder="********" required onChange={changeHandler} />
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
        Welcome back
      </button>
      <div className={classes.divider}>
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <button type="button" className={`${classes.outlineBtn} ${classes.submitBtn}`}>
        <PersonOutlineIcon className={classes.outlineIcon} />
        <Link to="/ads" className={classes.link}>
          Continue as Guest
        </Link>
      </button>
    </form>
  );
};
export default Login;
