import { Alert as MuiAlert, AlertProps as MuiAlertProps } from "@mui/material";

type AlertBaseProps = MuiAlertProps;

export interface AlertProps extends AlertBaseProps {
  label: string;
}

export const Alert = ({ label, ...rest }: AlertProps) => (
  <MuiAlert {...rest}>{label}</MuiAlert>
);
