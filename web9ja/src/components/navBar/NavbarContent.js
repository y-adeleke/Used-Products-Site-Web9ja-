// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";

// const CustomAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "white", // Change the background color to white
// }));

// const StyledTypography = styled(Typography)({
//   flexGrow: 1,
//   textAlign: "center", // Center the text
//   fontFamily: "'WEB9JA', roboto", // Use 'Web9ja' font
//   fontSize: 25,
//   fontWeight: "bold",
//   color: "black", // Change the font color to black
// });

// const buttonStyles = {
//   width: "120px", // Set the width to your desired size
//   marginRight: "15px", // Add 15px space to the right
//   fontSize: 10,
// };

// const StyledButton = styled(Button)({
//   ...buttonStyles,
//   backgroundColor: "black",
//   color: "white",
//   "&:hover": {
//     backgroundColor: "white",
//     color: "black",
//     border: "1px solid black",
//   },
// });

// const StyledSignInButton = styled(Button)({
//   ...buttonStyles,
//   backgroundColor: "white",
//   color: "black",
//   border: "1px solid black",
//   "&:hover": {
//     backgroundColor: "black",
//     color: "white",
//   },
// });

// // Second Code
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.common.white,
//   border: "1px solid #000", // Black border
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//     color: "#000", // Black text on hover
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   color: "#333", // Blackish-grey color
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "#333", // Blackish-grey color
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const CenterButtons = styled("div")(({ theme }) => ({
//   display: "flex",
//   justifyContent: "center",
//   gap: theme.spacing(2),
//   marginLeft: "auto", // Align buttons to the right
// }));

// const CustomButton = styled(Button)(({ theme }) => ({
//   color: "#333", // Blackish-grey color
// }));

// const BlackBackgroundButton = styled(Button)(({ theme }) => ({
//   color: "#333", // Blackish-grey color
//   "&:hover": {
//     backgroundColor: "#fff", // Black background on hover
//     color: "#000", // Black text on hover
//   },
// }));

// export default function FirstSearchNavBar(){
//   const handleSignIn = () => {
//     // Handle sign-in action
//     console.log("Sign In clicked");
//   };

// const handleGetStarted = () => {
//   // Handle get started action
//   console.log("Get Started clicked");
// };

//   return (
//     <>
//       {/* First Code - Contact Us, Web9ja, Get Started, Sign In */}
//       <Box sx={{ flexGrow: 1 }}>
//         <CustomAppBar position="static">
//           <Toolbar>
//             {/* Left Section - Contact Us */}
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginRight: "auto",
//                 color: "black",
//               }}
//             >
//               Contact us at web9ja@gmail.com
//             </Typography>

//             {/* Middle Section - Web9ja */}
//             <StyledTypography variant="h4" noWrap>
//               WEB9JA
//             </StyledTypography>

//             {/* Right Section - Get Started and Sign In */}
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <StyledButton onClick={handleGetStarted}>
//                 Get Started
//               </StyledButton>
//               <StyledSignInButton onClick={handleSignIn}>
//                 Sign In
//               </StyledSignInButton>
//             </Box>
//           </Toolbar>
//         </CustomAppBar>
//       </Box>

//       {/* Second Code - Search Bar and Buttons */}
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
//           <Toolbar>
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//             <CenterButtons>
//               <CustomButton sx={{ backgroundColor: "#fff", color: "#000" }}>
//                 Home
//               </CustomButton>
//               <BlackBackgroundButton>Posted Ads</BlackBackgroundButton>
//             </CenterButtons>
//             <BlackBackgroundButton
//               sx={{
//                 backgroundColor: "#333",
//                 color: "#fff",
//                 fontSize: "bolder",
//                 ml: "auto",
//               }}
//             >
//               Create Ad
//             </BlackBackgroundButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// }

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InputBase from "@mui/material/InputBase";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white", // Change the background color to white
}));

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "center", // Center the text
  fontFamily: "'WEB9JA', roboto", // Use 'Web9ja' font
  fontSize: 25,
  fontWeight: "bold",
  color: "black", // Change the font color to black
});

const buttonStyles = {
  width: "120px", // Set the width to your desired size
  marginRight: "15px", // Add 15px space to the right
  fontSize: 10,
};

// New styled components for language, heart, and user icons
const LanguageButton = styled(Button)({
  ...buttonStyles,
  backgroundColor: "transparent",
  color: "black",
});

const HeartButton = styled(Button)({
  ...buttonStyles,
  backgroundColor: "transparent",
  color: "black",
});

const UserButton = styled(Button)({
  ...buttonStyles,
  backgroundColor: "transparent",
  color: "black",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  border: "1px solid #000", // Black border
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    color: "#000", // Black text on hover
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#333", // Blackish-grey color
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#333", // Blackish-grey color
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const CenterButtons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginLeft: "auto", // Align buttons to the right
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: "#333", // Blackish-grey color
}));

const BlackBackgroundButton = styled(Button)(({ theme }) => ({
  ...buttonStyles,
  backgroundColor: "black",
  color: "white",
  borderRadius: "50px", // Make the button oval
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
  },
}));

export default function FirstSearchNavBar() {
  const handleLanguageClick = () => {
    // Handle language icon click
    console.log("Language clicked");
  };

  const handleHeartClick = () => {
    // Handle heart icon click
    console.log("Heart clicked");
  };

  const handleUserClick = () => {
    // Handle user icon click
    console.log("User clicked");
  };

  return (
    <>
      {/* First Code - Contact Us, Web9ja, Language, Heart, User */}
      <Box sx={{ flexGrow: 1 }}>
        <CustomAppBar position="static">
          <Toolbar>
            {/* Left Section - Contact Us */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "auto",
                color: "black",
              }}
            >
              Contact us at web9ja@gmail.com
            </Typography>

            {/* Middle Section - Web9ja */}
            <StyledTypography variant="h4" noWrap>
              WEB9JA
            </StyledTypography>

            {/* Right Section - Language, Heart, User */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LanguageButton onClick={handleLanguageClick}>
                <img src="../icons/Language.jpg" alt="Language" />
              </LanguageButton>
              <HeartButton onClick={handleHeartClick}>
                <img src={FavoriteBorderIcon} alt="Heart" />
              </HeartButton>
              <UserButton onClick={handleUserClick}>
                <img src="../icons/user.jpg" alt="User" />
              </UserButton>
            </Box>
          </Toolbar>
        </CustomAppBar>
      </Box>

      {/* Second Code - Search Bar and Buttons */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <img src="../icons/Magnifying_glass.jpg" alt="Search" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <CenterButtons>
              <CustomButton sx={{ backgroundColor: "#fff", color: "#000" }}>
                Home
              </CustomButton>
              <CustomButton sx={{ backgroundColor: "#fff", color: "grey" }}>
                Posted Ads
              </CustomButton>
            </CenterButtons>
            <BlackBackgroundButton
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                fontSize: "bolder",
                display: "flex",
                justifyContent: "center",
                ml: "auto",
              }}
            >
              Create Ad
            </BlackBackgroundButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
