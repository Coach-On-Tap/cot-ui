import LoadingButtonMui, {
  LoadingButtonProps as MuiLoadingButtonProps,
} from "@mui/lab/LoadingButton";

export interface LoadingButtonProps extends MuiLoadingButtonProps {
  label: string;
}

export const LoadingButton = ({ label, ...rest }: LoadingButtonProps) => (
  <LoadingButtonMui {...rest}>{label}</LoadingButtonMui>
);

export default LoadingButton;
