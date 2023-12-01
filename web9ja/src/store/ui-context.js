import { createContext, useState, useEffect } from "react";

const UIContext = createContext({
  loading: false,
  snackBar: {
    show: false,
    success: false,
    message: "",
  },
  formNavActive: "ad",
  navActive: "explore",
  setFormNavactive: (nav) => {},
  setNavActive: (nav) => {},
  setLoading: () => {},
  setSnackBar: () => {},
});

export const UIContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [navActive, setNavActive] = useState("explore");
  const [formNavActive, setFormNavActive] = useState("ad");
  const [snackBar, setSnackBar] = useState({
    show: false,
    success: false,
    message: "",
  });

  useEffect(() => {
    // This function will be triggered every time snackBar.show changes.
    if (snackBar.show) {
      const timer = setTimeout(() => {
        setSnackBar((prevState) => ({ ...prevState, success: false, show: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [snackBar.show]);

  const setNavActiveHandler = (nav) => {
    setNavActive(nav);
  };
  const setFormNavActiveHandler = (nav) => {
    setFormNavActive(nav);
  };

  const contextValue = {
    loading,
    formNavActive,
    navActive,
    snackBar,
    setFormNavactive: setFormNavActiveHandler,
    setLoading,
    setSnackBar,
    setNavActive: setNavActiveHandler,
  };

  return <UIContext.Provider value={contextValue}>{props.children}</UIContext.Provider>;
};
export default UIContext;
