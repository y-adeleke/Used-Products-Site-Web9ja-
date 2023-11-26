import { createContext, useState, useContext, useCallback } from "react";
import UIContext from "./ui-context";
import AuthContext from "./auth-context";

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
  signUp: (data) => {},
  updateUser: (data, userID, token) => {},
  deleteUser: (userID, token) => {},
});

export const UserContextProvider = (props) => {
  const uiContext = useContext(UIContext);
  const authContext = useContext(AuthContext);
  const [userData, setUserDataState] = useState(JSON.parse(localStorage.getItem("userData")));

  const setUserData = useCallback((data) => {
    setUserDataState(data);
    if (data) {
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      localStorage.removeItem("userData");
    }
  }, []);

  const signUpHandler = async (data) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch("https://web9ja-backend.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to create User!...";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
      console.log(resData);
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  const updateUserHandler = async (data, userID, token) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`https://web9ja-backend.onrender.com/users/update/${userID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          address: data.address,
          profilePicture: data.profilePicture,
          bio: data.bio,
        }),
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to update, try again.";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      setUserData(resData.user);
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
      localStorage.setItem("userData", JSON.stringify(resData.user));
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  const deleteUserHandler = async (userID, token) => {
    try {
      uiContext.setLoading(true);
      const res = await fetch(`url/${userID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const resData = await res.json();
        const errorMessage = resData.message || "Unable to delete, try again.";
        throw new Error(errorMessage);
      }
      const resData = await res.json();
      uiContext.setLoading(false);
      authContext.setToken(null);
      setUserData(null);
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      uiContext.setSnackBar({
        show: true,
        success: true,
        message: resData.message,
      });
    } catch (error) {
      uiContext.setLoading(false);
      uiContext.setSnackBar({
        show: true,
        success: false,
        message: error.message,
      });
    }
  };

  const contextValue = {
    userData: userData,
    setUserData,
    signUp: signUpHandler,
    updateUser: updateUserHandler,
    deleteUser: deleteUserHandler,
  };

  return <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>;
};
export default UserContext;
