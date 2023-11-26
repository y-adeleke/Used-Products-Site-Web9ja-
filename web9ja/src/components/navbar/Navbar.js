import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../images/WEB9JA-logo.png";
import InputBase from "@mui/material/InputBase";

const pages = ["Home", "Ads", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "#f6f6f6",
        color: "#000",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="logo"
            srcset=""
            style={{
              height: "50px",
              width: "50px",
              marginRight: "1rem",
            }}
          />
          {/* 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#1B7339",
              textDecoration: "none",
            }}>
            WEB9JA
          </Typography>
*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ flexGrow: 2, display: "flex", justifySelf: "center" }}>
              <input
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={{
                  backgroundColor: "#F2FFE9",
                  outline: "none",
                  width: "400px",
                  padding: "1rem",
                  height: "40px",
                  border: "none",
                  borderBottom: "2px solid #557C55",
                  borderRadius: "5px 0 0 5px",
                }}
              />
              <div
                style={{
                  background: "#557C55",
                  color: "#fff",
                  padding: "1rem",
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  border: "1px solid #557C55",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  borderRadius: "0 5px 5px 0",
                }}>
                <SearchIcon />
              </div>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: "inherit", display: "block" }}>
                {page}
              </Button>
            ))}
          </Box>

          {/*<Box sx={{ flexGrow: 0, display: "flex", justifySelf: "flex-end" }}>
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                "&:hover": {
                  transform: "translateY(-.1rem)",
                },
              }}
              style={{
                color: "#000",
                borderColor: "#000",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}>
              Shop as Guest
            </Button>
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "flex" },
                "&:hover": {
                  transform: "translateY(-.1rem)",
                },
              }}
              style={{
                background: "#1B7339",
                color: "#fff",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}>
              Sign Up
            </Button>
          </Box>
            */}

          {
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="A"
                    src="/static/images/avatar/2.jpg"
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
