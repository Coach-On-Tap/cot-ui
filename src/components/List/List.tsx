import {
  List as MuiList,
  ListProps as MuiListProps,
  ListItem,
  ListItemText,
} from "@mui/material";

type ListBaseProps = MuiListProps;

export interface ListItemData {
  id: string;
  text: string;
}

export interface ListProps extends ListBaseProps {
  items: ListItemData[];
}

export const List = ({ items, ...rest }: ListProps) => (
  <MuiList {...rest}>
    {items.map((item) => (
      <ListItem key={item.id}>
        <ListItemText primary={item.text} />
      </ListItem>
    ))}
  </MuiList>
);

export default List;
