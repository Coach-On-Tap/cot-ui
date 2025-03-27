import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";

type DrawerBaseProps = MuiDrawerProps;

export interface DrawerProps extends DrawerBaseProps {
  open: boolean;
  label: string;
}

export const Drawer = ({ open, label, ...rest }: DrawerProps) => (
  <MuiDrawer open={open} {...rest}>
    {label}
  </MuiDrawer>
);

export default Drawer;
