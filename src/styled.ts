import { themeColors } from 'assets/theme/style';
import styled from 'styled-components';
import backgroundImg from 'assets/images/background.png';

export const AppWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;
`;

export const AppBackground = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${themeColors.bg.body} url(${backgroundImg}) bottom no-repeat;
`;