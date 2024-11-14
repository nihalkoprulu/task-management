
import styled from 'styled-components';
import { devices, themeColors } from 'assets/theme/style';

export const TaskFilter= styled.div`
  display: flex;
  background-color: ${themeColors.white};
  padding: 24px;
  border-radius: 4px;
  align-items: center;
  gap: 32px;

  @media ${devices.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 16px;
  }
`; 