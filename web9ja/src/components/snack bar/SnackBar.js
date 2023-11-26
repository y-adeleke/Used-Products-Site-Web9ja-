import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import UIContext from "../../store/ui-context";
import { useContext, useEffect } from "react";

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);
  const uiContext = useContext(UIContext);

  useEffect(() => {
    if (uiContext.snackBar.show) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [uiContext.snackBar.show]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" color="primary" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} message={uiContext.snackBar.message} action={action} />
    </div>
  );
}
