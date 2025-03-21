import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type LinkBaseProps = MuiLinkProps;

export interface LinkProps extends LinkBaseProps {
  label: string;
}

const Link = ({ label, ...rest }: LinkProps) => (
  <MuiLink {...rest}>{label}</MuiLink>
);

export default Link;
