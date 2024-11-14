
import styled from 'styled-components';
import { devices, themeColors } from 'assets/theme/style';
import { FormControl } from '@mui/material';

export const PrioritySelect = styled(FormControl)`
  width: 200px;
  background-color: ${themeColors.white};
  
  @media ${devices.sm} {
    width: 100%;
  }
`;
