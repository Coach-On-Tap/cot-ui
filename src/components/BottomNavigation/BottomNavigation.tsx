import {
  BottomNavigation as BottomNavigationMui,
  BottomNavigationProps as MuiBottomNavigationProps,
} from "@mui/material";

export interface BottomNavigationProps extends MuiBottomNavigationProps {
  label?: string;
}

export const BottomNavigation = ({ label, ...rest }: BottomNavigationProps) => (
  <BottomNavigationMui aria-label={label} {...rest} />
);

export default BottomNavigation;
