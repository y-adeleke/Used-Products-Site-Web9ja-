import classes from "./Nav.module.css";
import Logo from "../../images/WEB9JA-logo.png";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import TuneIcon from "@mui/icons-material/Tune";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LanguageIcon from "@mui/icons-material/Language";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SearchIcon from "@mui/icons-material/Search";
import CatImg from "../../images/cat.jpg";
import { useContext, useEffect } from "react";
import AuthContext from "../../store/auth-context";
import UIContext from "../../store/ui-context";
import UserContext from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import AdsContext from "../../store/ads-context";

const Nav = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const authContext = useContext(AuthContext);
  const uiContext = useContext(UIContext);
  const userContext = useContext(UserContext);
  const adsContext = useContext(AdsContext);
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is the homepage
    setIsHome(location.pathname === '/');
  }, [location]);

  // Conditional class based on the current path
  const navbarClasses = `${classes.navbar} ${!isHome ? classes.profileNav : ''}`;
  const navbarLink = `${classes.navLink} ${!isHome ? classes.navLinkScrolled : ''}`;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Handling active nav link
  const exploreAdsHandler = () => {
    uiContext.setNavActive("explore");
    adsContext.setSearch("");
  };
  //Open filter side nav
  const filterAdsHandler = () => {
    uiContext.setSideNav(true);
  };
  const myAdsHandler = () => {
    uiContext.setNavActive("myAds");
    adsContext.setSearch("");
  };
  const favoriteAdsHandler = () => {
    uiContext.setNavActive("myFav");
    adsContext.setSearch("");
  };

  //Reset ad form data to null when user want to create a data
  //set the active form to ad
  const openAdFormHandler = () => {
    adsContext.setActiveAdData(null);
    uiContext.setFormNavactive("ad");
  };

  //Logout handler
  const logoutHandler = () => {
    authContext.logOut();
    uiContext.setNavActive("explore");
  };

  //Update profile handler
  const updateProfileHandler = () => {
    navigate("/ads/adform");
    uiContext.setFormNavactive("user profile");
  };

  //Search handler
  const searchChangeHandler = (e) => {
    adsContext.setSearch(e.target.value);
  };

  return (
    <nav className={` ${navbarClasses}`}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "stretch",
        }}>
        <div
          className={classes.brand}
          onClick={() => {
            navigate("/");
          }}>
          <img src={Logo} alt="logo" srcSet="" style={{ height: "50px", width: "50px", marginRight: "1rem" }} />
        </div>

        <ul className={classes.navLinks}>
          <li className={`${classes.navAdLink} ${navbarLink} ${uiContext.navActive === "explore" && classes.navAdLinkActive}`} onClick={exploreAdsHandler}>
            Explore Ads <LanguageIcon className={classes.icon} />
          </li>

          <li className={`${classes.navAdLink} ${navbarLink} ${uiContext.navActive === "filter" && classes.navAdLinkActive} `} onClick={filterAdsHandler}>
            Filter <TuneIcon className={classes.icon} />
          </li>

          {authContext.token && (
            <li className={`${classes.navAdLink} ${navbarLink} ${uiContext.navActive === "myAds" && classes.navAdLinkActive}`} onClick={myAdsHandler}>
              My Ads <AdsClickIcon className={classes.icon} />
            </li>
          )}

          {authContext.token && (
            <li className={`${classes.navAdLink} ${navbarLink} ${uiContext.navActive === "myFav" && classes.navAdLinkActive}`} onClick={favoriteAdsHandler}>
              My favorites <FavoriteBorderIcon className={classes.icon} />
            </li>
          )}

          <li className={`${classes.navAdLink} ${classes.navLink}`} onClick={filterAdsHandler}>
            Filter <TuneIcon className={classes.icon} />
          </li>
        </ul>
      </div>

      <div className={classes.searchBox}>
        <input type="text" placeholder="Search for an AD" className={classes.search} onChange={searchChangeHandler} />
        <SearchIcon className={classes.searchIcon} />
      </div>
      {!authContext.token && (
        <NavLink to="/auth">
          <button className={classes.createAd}>Sign In</button>
        </NavLink>
      )}

      {authContext.token && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}>
          <NavLink to="/ads/adform" onClick={openAdFormHandler} className={classes.createAd} style={{ textDecoration: "none", color: "#fff" }}>
            Create Ad &#43;
          </NavLink>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                src={userContext.userData?.profilePicture ? userContext.userData?.profilePicture : CatImg}
                style={{
                  backgroundColor: "#1B7339",
                  color: "#f6f6f6",
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                updateProfileHandler();
              }}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                logoutHandler();
              }}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
};
export default Nav;
