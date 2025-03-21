"use client";
import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import React from "react";

type TimePickerBaseProps = MuiTimePickerProps<Date, boolean>;

export interface TimePickerProps extends TimePickerBaseProps {
  label: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ label, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <MuiTimePicker label={label} {...rest} />
    </LocalizationProvider>
  );
};

export default TimePicker;
