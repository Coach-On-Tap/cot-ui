import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  Box,
  Typography,
} from "@mui/material";

type LinearProgressBaseProps = MuiLinearProgressProps;

export interface LinearProgressProps extends LinearProgressBaseProps {
  label?: string;
}

const LinearProgress = ({ label, ...props }: LinearProgressProps) => (
  <Box sx={{ width: "100%", margin: "16px 0" }}>
    {label && (
      <Typography variant="body2" sx={{ marginBottom: 1 }}>
        {label}
      </Typography>
    )}
    <MuiLinearProgress {...props} />
  </Box>
);

export default LinearProgress;
