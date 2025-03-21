import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from "@mui/material";
import { Typography } from "@mui/material";

type RatingBaseProps = MuiRatingProps;

export interface RatingProps extends RatingBaseProps {
  label: string;
}

const Rating = ({ label, ...props }: RatingProps) => {
  return (
    <div>
      <Typography variant="body1">{label}</Typography>
      <MuiRating {...props} />
    </div>
  );
};

export default Rating;
