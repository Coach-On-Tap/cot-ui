import ImageListItemMui, {
  ImageListItemProps as MuiImageListItemProps,
} from "@mui/material/ImageListItem";

type ImageListItemBaseProps = MuiImageListItemProps;

export interface ImageListItemProps extends ImageListItemBaseProps {
  label: string;
}

export const ImageListItem = ({ label, children, ...rest }: ImageListItemProps) => (
  <div>
    <div>{label}</div>
    <ImageListItemMui {...rest}>{children}</ImageListItemMui>
  </div>
);

export default ImageListItem;
