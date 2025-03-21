import { Box as BoxMui, BoxProps as MuiBoxProps } from "@mui/material";

export interface BoxProps extends MuiBoxProps {
  label?: string;
}

const Box = ({ label, ...rest }: BoxProps) => (
  <BoxMui {...rest}>{label && <span>{label}</span>}</BoxMui>
);

export default Box;
