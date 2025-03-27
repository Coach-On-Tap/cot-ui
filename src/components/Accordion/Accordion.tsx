import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionProps as MuiAccordionProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionProps extends MuiAccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content, ...rest }: AccordionProps) => (
  <MuiAccordion {...rest}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </MuiAccordion>
);

export default Accordion;
