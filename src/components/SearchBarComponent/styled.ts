
import styled from 'styled-components';
import { themeColors } from 'assets/theme/style';

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  background-color: ${themeColors.white};
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(51, 51, 51, 0.3);
  border-radius: 4px;
  padding: 5px 14px;

  &:hover{
    border: 1px solid rgb(51, 51, 51);
  }
`; 
