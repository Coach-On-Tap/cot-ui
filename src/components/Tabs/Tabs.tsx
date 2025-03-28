import { Tabs as MuiTabs, TabsProps as MuiTabsProps, Tab } from "@mui/material";
import React from "react";

type TabsBaseProps = MuiTabsProps;

export interface TabItem {
  label?: string;
  value: string;
}

export interface TabsProps extends TabsBaseProps {
  tabs: TabItem[];
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  value: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, onChange, value, ...rest }) => {
  return (
    <MuiTabs value={value} onChange={onChange} {...rest}>
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.label} value={tab.value} />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
