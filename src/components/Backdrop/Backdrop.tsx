import {
  Backdrop as BackdropMui,
  BackdropProps as MuiBackdropProps,
} from "@mui/material";

export interface BackdropProps extends MuiBackdropProps {
  label?: string;
}

export const Backdrop = ({ label, ...rest }: BackdropProps) => (
  <BackdropMui {...rest}>{label && <span>{label}</span>}</BackdropMui>
);

export default Backdrop;
