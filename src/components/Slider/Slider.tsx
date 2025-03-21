import {
  Slider as MuiSlider,
  SliderProps as MuiSliderProps,
} from "@mui/material";
import { Typography } from "@mui/material";

type SliderBaseProps = MuiSliderProps;

export interface SliderProps extends SliderBaseProps {
  label: string;
}

const Slider = ({ label, ...props }: SliderProps) => {
  return (
    <div>
      <Typography variant="body1">{label}</Typography>
      <MuiSlider {...props} />
    </div>
  );
};

export default Slider;
