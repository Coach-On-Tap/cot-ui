import {
    Paper as MuiPaper,
    PaperProps as MuiPaperProps,
} from "@mui/material";

type PaperBaseProps = MuiPaperProps;

export interface PaperProps extends PaperBaseProps {
    label?: string;
}

export const Paper = ({ label, ...props }: PaperProps) => {
    return (
        <MuiPaper {...props}>
            {label}
        </MuiPaper>
    );
};

export default Paper;