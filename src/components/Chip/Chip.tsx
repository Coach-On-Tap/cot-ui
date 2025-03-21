import {
    Chip as ChipMui,
    ChipProps as MuiChipProps,
  } from "@mui/material";
  
  export interface ChipProps extends MuiChipProps {
    label: string; 
  }
  
  const Chip = ({ label, ...rest }: ChipProps) => (
    <ChipMui label={label} {...rest} />
  );
  
  export default Chip;