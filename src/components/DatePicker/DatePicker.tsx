"use client";
import { styled } from "@mui/material";
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

interface TDatePickerBaseProps extends DatePickerProps<Date> {}

export interface CustomDatePickerProps extends TDatePickerBaseProps {
  label?: string;
}

const DatePickerStyled = styled(DatePicker)({}) as
  | React.ElementType
  | React.ComponentType<CustomDatePickerProps>;

const DatePickerMui: React.FC<CustomDatePickerProps> = ({ label, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DatePickerStyled label={label} {...rest} />
    </LocalizationProvider>
  );
};

export default DatePickerMui;
