import { Dialog } from "@mui/material";
import { FC } from "react";

interface DialogViewProps {
  open: boolean;
  clickHandler: () => void;
  dialogContent: JSX.Element;
}

const DialogView: FC<DialogViewProps> = ({
  open,
  clickHandler,
  dialogContent,
}) => (
  <Dialog
    fullWidth
    maxWidth="md"
    open={open}
    onClose={clickHandler}
    data-testid="dialog-view-container"
  >
    {dialogContent}
  </Dialog>
);

export default DialogView;
