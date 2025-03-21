import {
  AppBar as AppBarMui,
  AppBarProps as MuiAppBarProps,
  Toolbar,
  Typography,
} from "@mui/material";

export interface AppBarProps extends MuiAppBarProps {
  label: string;
}
const AppBar = ({ label, ...rest }: AppBarProps) => (
  <AppBarMui {...rest}>
    <Toolbar>
      <Typography variant="h6" component="div">
        {label}
      </Typography>
    </Toolbar>
  </AppBarMui>
);

export default AppBar;
