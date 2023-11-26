import { createContext, useState, useEffect, useContext } from "react";
import UIContext from "./ui-context";
import UserContext from "./user-context";

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  signIn: (email, password) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const uiContext = useContext(UIContext);
  const { setUserData } = useContext(UserContext);
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  useEffect(() => {
    // Function to check token expiration
    const checkTokenExpiration = () => {
      const storedTokenData = JSON.parse(localStorage.getItem("token"));
      const currentDateTime = new Date();
      if (!storedTokenData || new Date(storedTokenData.expiration) <= currentDateTime) {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setToken(null);
        setUserData(null);
      } else {
        setToken(storedTokenData.token);
        setUserData(JSON.parse(localStorage.getItem("userData")));
      }
    };
    // Perform an immediate check on mount
    checkTokenExpiration();
    // Set up the interval for periodic checks (every 10 mins)
    const interval = setInterval(checkTokenExpiration, 10 * 60 * 1000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [setUserData]);

  const signInHandler = async (email, password) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch("https://web9ja-backend.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      console.log(res);
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to sign in, try again.";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      setUserData(resData.user);
      setToken(resData.token);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
      const expirationTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 1 day from now
      localStorage.setItem("token", JSON.stringify({ token: resData.token, expiration: expirationTime }));
      localStorage.setItem("userData", JSON.stringify(resData.user));
      return true;
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  const signOutHandler = async () => {
    uiContext.setLoading(true);
    setToken(null);
    setUserData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    uiContext.setLoading(false);
    uiContext.setSnackBar({
      show: true,
      success: true,
      message: "You are succesfully signed out",
    });
  };

  const contextValue = {
    token: token,
    setToken,
    signIn: signInHandler,
    logOut: signOutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};
export default AuthContext;
