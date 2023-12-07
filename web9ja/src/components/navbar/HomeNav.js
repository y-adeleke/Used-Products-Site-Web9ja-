import classes from "./Nav.module.css";
import Logo from "../../images/WEB9JA-logo.png";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const HomeNav = () => {
  const authCtx = useContext(AuthContext);

  return (
    <nav className={` ${classes.navbar}`}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "stretch",
        }}>
        <div className={classes.brand}>
          <img src={Logo} alt="logo" srcset="" style={{ height: "50px", width: "50px", marginRight: "1rem" }} />
          <span>WEB9JA</span>
        </div>

        <ul className={classes.navLinks}>
          <li className={classes.navLink}>Features</li>
          <li className={classes.navLink}>About</li>
          <li className={classes.navLink}>Reviews</li>
          <li className={classes.navLink}>Contact</li>
        </ul>
      </div>

      {!authCtx.token && (
        <div className={classes.navBtns}>
          <NavLink className={classes.navBtn} to="/ads">
            Shop as guest
          </NavLink>
          <NavLink className={classes.navBtn} to="/auth">
            Sign In
          </NavLink>
        </div>
      )}
      {authCtx.token && (
        <div className={classes.navBtns}>
          <NavLink to="/ads" className={`${classes.navBtn} ${classes.btnGreen}`}>
            Explore
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default HomeNav;
