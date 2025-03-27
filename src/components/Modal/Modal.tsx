import {
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalBaseProps = MuiModalProps;

export interface ModalProps extends ModalBaseProps {
  title?: string;
  onClose: () => void;
}

export const Modal = ({ title, onClose, children, ...rest }: ModalProps) => (
  <MuiModal {...rest} onClose={onClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box mt={2}>{children}</Box>
    </Box>
  </MuiModal>
);

export default Modal;
