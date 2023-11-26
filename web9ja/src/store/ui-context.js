import { createContext, useState, useEffect } from "react";

const UIContext = createContext({
  loading: false,
  snackBar: {
    show: false,
    success: false,
    message: "",
  },
  setLoading: () => {},
  setSnackBar: () => {},
});

export const UIContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
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

  const contextValue = {
    loading,
    setLoading,
    snackBar,
    setSnackBar,
  };

  return <UIContext.Provider value={contextValue}>{props.children}</UIContext.Provider>;
};
export default UIContext;
