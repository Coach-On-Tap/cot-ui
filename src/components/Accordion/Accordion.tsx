import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionProps as MuiAccordionProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionProps extends MuiAccordionProps {
  label?: string;
  content: string;
}

export const Accordion = ({ label, content, ...rest }: AccordionProps) => (
  <MuiAccordion {...rest}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{label}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </MuiAccordion>
);

export default Accordion;
