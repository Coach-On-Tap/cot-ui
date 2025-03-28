import {
  CssBaseline as CssBaselineMui,
  CssBaselineProps as MuiCssBaselineProps,
} from "@mui/material";

export interface CssBaselineProps extends MuiCssBaselineProps {
  label?: string;
}

export const CssBaseline = ({ label, ...rest }: CssBaselineProps) => (
  <CssBaselineMui {...rest} />
);

export default CssBaseline;
