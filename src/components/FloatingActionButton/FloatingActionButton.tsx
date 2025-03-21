import {
    Fab as FabMui,
    FabProps as MuiFabProps,
  } from "@mui/material";
  
  type FabBaseProps = MuiFabProps;
  
  export interface FabProps extends FabBaseProps {
    label: string;
  }
  
  const Fab = ({ label, ...rest }: FabProps) => (
    <FabMui {...rest}>{label}</FabMui>
  );
  
  export default Fab;
  