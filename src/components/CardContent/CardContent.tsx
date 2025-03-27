import {
  CardContent as CardContentMui,
  CardContentProps as MuiCardContentProps,
} from "@mui/material";

export interface CardContentProps extends MuiCardContentProps {
  label?: string;
}

const CardContent = ({ label, ...rest }: CardContentProps) => (
  <CardContentMui {...rest}>{label && <span>{label}</span>}</CardContentMui>
);

export default CardContent;
