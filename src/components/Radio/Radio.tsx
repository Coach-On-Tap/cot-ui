import {
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  FormControlLabel,
} from "@mui/material";

type RadioBaseProps = MuiRadioProps;

export interface RadioProps extends RadioBaseProps {
  label?: string;
}

export const Radio = ({ label, ...rest }: RadioProps) => (
  <FormControlLabel control={<MuiRadio {...rest} />} label={label} />
);

export default Radio;
