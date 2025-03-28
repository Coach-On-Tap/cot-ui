import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = MuiButtonProps;

export interface ButtonProps extends ButtonBaseProps {
  label?: string;
}

const CButton = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);

export default CButton;