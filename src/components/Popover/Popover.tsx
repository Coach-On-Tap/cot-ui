import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
  Box,
  Typography,
} from "@mui/material";

type PopoverBaseProps = MuiPopoverProps;

export interface PopoverProps extends PopoverBaseProps {
  title?: string;
  children: React.ReactNode;
}

const Popover = ({ title, children, ...rest }: PopoverProps) => (
  <MuiPopover {...rest}>
    {title && (
      <Box sx={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
        <Typography variant="h6">{title}</Typography>
      </Box>
    )}
    <Box sx={{ padding: "16px" }}>{children}</Box>
  </MuiPopover>
);

export default Popover;
