import {
  Breadcrumbs as BreadcrumbsMui,
  BreadcrumbsProps as MuiBreadcrumbsProps,
} from "@mui/material";

export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
  label?: string;
}

export const Breadcrumbs = ({ label, ...rest }: BreadcrumbsProps) => (
  <BreadcrumbsMui aria-label={label} {...rest} />
);

export default Breadcrumbs;
