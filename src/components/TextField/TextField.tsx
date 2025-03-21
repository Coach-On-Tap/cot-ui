import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

type TextFieldBaseProps = MuiTextFieldProps;

export type TextFieldProps = TextFieldBaseProps & {
  label: string;
};

const TextField = (props: TextFieldProps) => {
  return <MuiTextField {...props} />;
};

export default TextField;
