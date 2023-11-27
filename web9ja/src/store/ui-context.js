import { createContext, useState, useEffect } from "react";

const UIContext = createContext({
  loading: false,
  openUpdateForm: false,
  setOpenUpdateForm: () => {},
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
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
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

  const openUpdateFormHandler = (condition) => {
    setOpenUpdateForm(condition);
  };

  const contextValue = {
    loading,
    openUpdateForm: openUpdateForm,
    setOpenUpdateForm: openUpdateFormHandler,
    setLoading,
    snackBar,
    setSnackBar,
  };

  return <UIContext.Provider value={contextValue}>{props.children}</UIContext.Provider>;
};
export default UIContext;
