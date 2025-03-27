import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  MenuItem,
} from "@mui/material";

type SelectBaseProps = MuiSelectProps;

export interface SelectOption {
  value: string | number;
  label: string;
}

export type SelectProps = SelectBaseProps & {
  options: SelectOption[];
};

const Select = ({ options, ...rest }: SelectProps) => (
  <MuiSelect {...rest}>
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </MuiSelect>
);

export default Select;
