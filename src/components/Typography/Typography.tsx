import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import React from "react";

type TypographyBaseProps = MuiTypographyProps;

export interface TypographyProps extends TypographyBaseProps {
  label: string;
}

const Typography: React.FC<TypographyProps> = ({ label, ...props }) => {
  return <MuiTypography {...props}>{label}</MuiTypography>;
};

export default Typography;
