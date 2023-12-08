import classes from "./Nav.module.css";
import Logo from "../../images/WEB9JA-logos_transparent.png";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HomeNav = () => {
  const authCtx = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const { ads } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is more than 0, set isScrolled to true
      setIsScrolled(window.scrollY > 0);
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set up the navbar classes dynamically
  const navbarClasses = `${classes.navbar} ${!ads ? classes.homeActive : ""} ${isScrolled ? classes.scrolled : ''}`;
  const navbarLink = `${classes.navLink} ${isScrolled ? classes.navLinkScrolled : ''}`;

  return (
    <nav className={navbarClasses}>
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
          <li className={navbarLink}>Features</li>
          <li className={navbarLink}>About</li>
          <li className={navbarLink}>Reviews</li>
          <li className={navbarLink}>Contact</li>
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
