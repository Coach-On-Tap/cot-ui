import {
  Tooltip as MuiTooltip,
  TooltipProps as MuiTooltipProps,
} from "@mui/material";
import React from "react";

type TooltipBaseProps = MuiTooltipProps;

export interface TooltipProps extends TooltipBaseProps {
  label?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, label, ...rest }) => {
  const { title, ...restWithoutTitle } = rest;
  return (
    <MuiTooltip title={label} {...restWithoutTitle}>
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
