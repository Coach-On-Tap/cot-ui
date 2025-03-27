import {
    CircularProgress as CircularProgressMui,
    CircularProgressProps as MuiCircularProgressProps,
  } from "@mui/material";
  
  export interface CircularProgressProps extends MuiCircularProgressProps {
    label?: string;
  }
  
  const CircularProgress = ({ label, ...rest }: CircularProgressProps) => (
    <CircularProgressMui aria-label={label} {...rest} />
  );
  
  export default CircularProgress;