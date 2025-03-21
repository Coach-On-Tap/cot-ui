import { Card as CardMui, CardProps as MuiCardProps } from "@mui/material";

export interface CardProps extends MuiCardProps {
  label?: string;
}

const Card = ({ label, ...rest }: CardProps) => (
  <CardMui {...rest}>{label && <span>{label}</span>}</CardMui>
);

export default Card;
