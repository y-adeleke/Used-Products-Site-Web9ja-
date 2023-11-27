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
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import UIContext from "../../store/ui-context";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [active, setActive] = useState("explore"); // for active link
  const authContext = useContext(AuthContext);
  const uiContext = useContext(UIContext);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const exploreAdsHandler = () => {
    setActive("explore");
  };
  const filterAdsHandler = () => {
    setActive("filter");
  };
  const myAdsHandler = () => {
    setActive("myAds");
  };
  const favoriteAdsHandler = () => {
    setActive("myFav");
  };

  const logoutHandler = () => {
    authContext.logOut();
  };
  const updateProfileHandler = () => {
    console.log("before");
    uiContext.setOpenUpdateForm(true);
  };

  return (
    <nav className={` ${classes.navbar}`}>
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
          <li className={`${classes.navAdLink} ${classes.navLink} ${active === "explore" && classes.navAdLinkActive}`} onClick={exploreAdsHandler}>
            Explore Ads <LanguageIcon className={classes.icon} />
          </li>

          <li className={`${classes.navAdLink} ${classes.navLink} ${active === "filter" && classes.navAdLinkActive} `} onClick={filterAdsHandler}>
            Filter <TuneIcon className={classes.icon} />
          </li>

          {authContext.token && (
            <li className={`${classes.navAdLink} ${classes.navLink} ${active === "myAds" && classes.navAdLinkActive}`} onClick={myAdsHandler}>
              My Ads <AdsClickIcon className={classes.icon} />
            </li>
          )}

          {authContext.token && (
            <li className={`${classes.navAdLink} ${classes.navLink} ${active === "myFav" && classes.navAdLinkActive}`} onClick={favoriteAdsHandler}>
              My favorites <FavoriteBorderIcon className={classes.icon} />
            </li>
          )}
        </ul>
      </div>

      <div className={classes.searchBox}>
        <input type="text" placeholder="Search for an AD" className={classes.search} />
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
          <button className={classes.createAd}>Create Ad &#43;</button>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="A"
                src={CatImg}
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
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={logoutHandler}>
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
};
export default Nav;
