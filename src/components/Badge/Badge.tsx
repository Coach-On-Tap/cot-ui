import { Badge as BadgeMui, BadgeProps as MuiBadgeProps } from "@mui/material";

export interface BadgeProps extends MuiBadgeProps {
  label: string | number;
}

const Badge = ({ label, ...rest }: BadgeProps) => (
  <BadgeMui badgeContent={label} {...rest} />
);

export default Badge;
