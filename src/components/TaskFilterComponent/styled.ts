
import styled from 'styled-components';
import { devices, themeColors } from 'assets/theme/style';
import { FormControl } from '@mui/material';

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

export const PrioritySelect = styled(FormControl)`
  width: 200px;
  background-color: ${themeColors.white};
  
  @media ${devices.sm} {
    width: 100%;
  }
`;
