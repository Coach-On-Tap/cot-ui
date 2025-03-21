import {
  ButtonGroup as ButtonGroupMui,
  ButtonGroupProps as MuiButtonGroupProps,
} from "@mui/material";

export interface ButtonGroupProps extends MuiButtonGroupProps {
  label?: string;
}

const ButtonGroup = ({ label, ...rest }: ButtonGroupProps) => (
  <ButtonGroupMui aria-label={label} {...rest} />
);

export default ButtonGroup;
