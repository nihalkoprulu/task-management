
import { Box, Chip, Paper } from '@mui/material';
import { themeColors } from 'assets/theme/style';
import { fontSizes, fontWeights, typography } from 'assets/theme/typography';
import styled from 'styled-components';

interface ChipProps {
  bgColor: string;
}

export const TaskList = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const TaskItem = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: ${themeColors.bg.surface}!important;
  box-shadow: none!important;
  height: "auto";
  min-height: 150px;
  padding: 16px; 
  position: relative ;
  gap: 8px;

  h4, p {
    margin: 0;
  }

  h4 {
    ${typography.cardTitle};
  }
  p{
    ${typography.cardDescription}
  }

  &:hover {
    background-color: ${themeColors.bg.surfaceHover}!important;
  }
`;

export const TaskMenuContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 0;
`;

export const ChipStyled = styled(Chip)<ChipProps>`
  width: 80px;
  background-color: ${({ bgColor }) => `${bgColor}!important`};
  color: ${themeColors.white}!important;
  font-size: ${fontSizes.xxsmall}!important;
  font-weight: ${fontWeights.bold};
  height: 24px!important;
`;

