import {
  Checkbox as CheckboxMui,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
}

const Checkbox = ({ label, ...rest }: CheckboxProps) => (
  <CheckboxMui {...rest} aria-label={label} />
);

export default Checkbox;
