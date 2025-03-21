import { Grid as MuiGrid, GridProps as MuiGridProps } from "@mui/material";

type GridBaseProps = MuiGridProps;

export interface GridProps extends GridBaseProps {
  label: string;
}

const Grid = ({ label, children, ...rest }: GridProps) => (
  <MuiGrid {...rest}>
    <div>{label}</div>
    {children}
  </MuiGrid>
);

export default Grid;
