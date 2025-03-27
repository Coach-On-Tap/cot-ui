import {
  Container as ContainerMui,
  ContainerProps as MuiContainerProps,
} from "@mui/material";

export interface ContainerProps extends MuiContainerProps {
  label?: string;
}

const Container = ({ label, ...rest }: ContainerProps) => (
  <ContainerMui {...rest}>{label && <span>{label}</span>}</ContainerMui>
);

export default Container;
