import React from "react";
import DividerMui, {
  DividerProps as MuiDividerProps,
} from "@mui/material/Divider";

export interface DividerProps extends MuiDividerProps {
  label?: string;
}

const Divider: React.FC<DividerProps> = ({ label, ...rest }) => {
  return (
    <>
      {label && (
        <div style={{ textAlign: "center", margin: "8px 0" }}>{label}</div>
      )}
      <DividerMui {...rest} />
    </>
  );
};

export default Divider;
