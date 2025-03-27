import ImageListMui, {
  ImageListProps as MuiImageListProps,
} from "@mui/material/ImageList";

type ImageListBaseProps = MuiImageListProps;

export interface ImageListProps extends ImageListBaseProps {
  label: string;
}

const ImageList = ({ label, children, ...rest }: ImageListProps) => (
  <div>
    <div>{label}</div>
    <ImageListMui {...rest}>{children}</ImageListMui>
  </div>
);

export default ImageList;
