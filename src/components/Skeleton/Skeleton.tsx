import {
  Skeleton as MuiSkeleton,
  SkeletonProps as MuiSkeletonProps,
} from "@mui/material";

type SkeletonBaseProps = MuiSkeletonProps;

export interface SkeletonProps extends SkeletonBaseProps {
  label?: string;
}

export const Skeleton = ({ label, ...props }: SkeletonProps) => {
  return (
    <div aria-label={label}>
      <MuiSkeleton {...props} />
    </div>
  );
};

export default Skeleton;
