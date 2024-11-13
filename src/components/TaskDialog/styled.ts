
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { FormControl } from '@mui/material';

export const TaskDialogContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 30px 0;
  width: 100%;
`;

export const PrioritySelect = styled(FormControl)`
  width: 100%;
`;

export const TaskDialogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
   
