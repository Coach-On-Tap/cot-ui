import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

type DialogBaseProps = MuiDialogProps;

export interface DialogProps extends DialogBaseProps {
  label?: string;
  actions?: React.ReactNode;
}

export const Dialog = ({ label, children, actions, ...rest }: DialogProps) => (
  <MuiDialog {...rest}>
    <DialogTitle>{label}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    {actions && <DialogActions>{actions}</DialogActions>}
  </MuiDialog>
);

export default Dialog;
