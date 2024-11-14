import { AppBar } from '@mui/material';
import { themeColors } from 'assets/theme/style';
import styled from 'styled-components';

export const AppBarStyled = styled(AppBar)`
  position: relative;
  background-color: ${themeColors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
