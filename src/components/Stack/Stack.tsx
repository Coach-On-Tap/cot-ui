import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";

type StackBaseProps = MuiStackProps;

export interface StackProps extends StackBaseProps {
  label: string;
}

export const Stack = ({ label, ...props }: StackProps) => {
  return (
    <>
      <div>{label}</div>
      <MuiStack {...props} />
    </>
  );
};

export default Stack;
