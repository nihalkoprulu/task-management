import { themeColors } from "assets/theme/style";
import { FC } from "react";
import {
  AlertDialogButtonWrapper,
  AlertDialogDialogStyled,
  AlertDialogText,
  AlertDialogTitle,
} from "./styled";
import { Button, Divider } from "@mui/material";

interface AlertDialogProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondButtonText?: string;
  open: boolean;
  clickHandler: () => void;
  clickSecondHandler: () => void;
  height?: string;
  width?: string;
}

const AlertDialog: FC<AlertDialogProps> = ({
  title,
  description,
  primaryButtonText = "Confirm",
  secondButtonText = "Back",
  open = false,
  clickHandler,
  clickSecondHandler,
}) => (
  <AlertDialogDialogStyled
    data-testid="alert-dialog-view-container"
    open={open}
    onClose={clickHandler}
    disableEscapeKeyDown
  >
    <AlertDialogTitle>{title}</AlertDialogTitle>
    <Divider />
    <AlertDialogText>{description}</AlertDialogText>
    <AlertDialogButtonWrapper>
      <Button
        onClick={() => clickSecondHandler()}
        variant="outlined"
        sx={{
          backgroundColor: themeColors.white,
          border: `1px solid ${themeColors.button.primary}`,
          color: themeColors.button.primary,
          "&:hover": {
            border: `1px solid ${themeColors.button.primaryHover}`,
          },
        }}
      >
        {secondButtonText}
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: themeColors.button.primary,
          "&:hover": {
            backgroundColor: themeColors.button.primaryHover,
          },
        }}
        onClick={() => clickHandler()}
      >
        {primaryButtonText}
      </Button>
    </AlertDialogButtonWrapper>
  </AlertDialogDialogStyled>
);

export default AlertDialog;
