import {
    CircularProgress as CircularProgressMui,
    CircularProgressProps as MuiCircularProgressProps,
  } from "@mui/material";
  
  export interface CircularProgressProps extends MuiCircularProgressProps {
    label?: string;
  }
  
  export const CircularProgress = ({ label, ...rest }: CircularProgressProps) => (
    <CircularProgressMui aria-label={label} {...rest} />
  );
  
  export default CircularProgress;