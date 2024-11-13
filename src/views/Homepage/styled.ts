import { themeColors } from 'assets/theme/style';
import styled from 'styled-components';

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 30px;
`;

export const HomepageTitle = styled.h1`
  text-align: center;
  color: ${themeColors.white};
`;

export const HomepageButtonWrapper =  styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
