import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  FormControlLabel,
} from "@mui/material";

type SwitchBaseProps = MuiSwitchProps;

export interface SwitchProps extends SwitchBaseProps {
  label: string;
}

export const Switch = ({ label, ...props }: SwitchProps) => {
  return <FormControlLabel control={<MuiSwitch {...props} />} label={label} />;
};

export default Switch;
