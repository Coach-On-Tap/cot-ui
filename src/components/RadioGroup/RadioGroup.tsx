import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from "@mui/material";
import Radio from "../Radio/Radio";

type RadioGroupBaseProps = MuiRadioGroupProps;

export interface RadioGroupProps extends RadioGroupBaseProps {
  options: { label: string; value: string }[];
}

const RadioGroup = ({ options, ...rest }: RadioGroupProps) => (
  <MuiRadioGroup {...rest}>
    {options.map((option) => (
      <Radio key={option.value} label={option.label} value={option.value} />
    ))}
  </MuiRadioGroup>
);

export default RadioGroup;
