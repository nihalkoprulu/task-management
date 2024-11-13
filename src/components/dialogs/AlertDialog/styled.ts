import { Dialog } from '@mui/material';
import styled from 'styled-components';

export const AlertDialogDialogStyled = styled(Dialog)`

  .MuiDialog-paper {
    padding: 24px;
    margin-bottom: 10px;
  }
`;

export const AlertDialogTitle = styled.h4``;

export const AlertDialogText = styled.p``;

export const AlertDialogButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  margin-top: 24px;
`;
