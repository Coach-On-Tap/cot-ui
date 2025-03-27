import {
  SpeedDial as MuiSpeedDial,
  SpeedDialProps as MuiSpeedDialProps,
  SpeedDialAction,
} from "@mui/material";
import React from "react";

type SpeedDialBaseProps = MuiSpeedDialProps;

export interface SpeedDialActionType {
  icon: React.ReactNode;
  name: string;
  onClick: () => void;
}

export interface SpeedDialProps extends SpeedDialBaseProps {
  actions: SpeedDialActionType[];
}

export const SpeedDial: React.FC<SpeedDialProps> = ({ actions, ...rest }) => {
  return (
    <MuiSpeedDial {...rest}>
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </MuiSpeedDial>
  );
};

export default SpeedDial;
