import {
  Avatar as AvatarMui,
  AvatarProps as MuiAvatarProps,
} from "@mui/material";

export interface AvatarProps extends MuiAvatarProps {
  label?: string;
}

export const Avatar = ({ label, ...rest }: AvatarProps) => (
  <AvatarMui {...rest}>{label}</AvatarMui>
);

export default Avatar;
