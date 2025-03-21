import {
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
  Alert,
} from "@mui/material";
import React from "react";

type SnackbarBaseProps = MuiSnackbarProps;

export interface SnackbarProps extends SnackbarBaseProps {
  message: string;
  severity?: "success" | "error" | "warning" | "info";
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  severity = "info",
  ...rest
}) => {
  return (
    <MuiSnackbar {...rest}>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
