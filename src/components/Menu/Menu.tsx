import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem,
  ListItemText,
} from "@mui/material";

type MenuBaseProps = MuiMenuProps;

export interface MenuItemData {
  id: string;
  text: string;
  onClick?: () => void;
}

export interface MenuProps extends MenuBaseProps {
  items: MenuItemData[];
}

const Menu = ({ items, ...rest }: MenuProps) => (
  <MuiMenu {...rest}>
    {items.map((item) => (
      <MenuItem key={item.id} onClick={item.onClick}>
        <ListItemText primary={item.text} />
      </MenuItem>
    ))}
  </MuiMenu>
);

export default Menu;
