import React from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import ThemeSwitch from './ThemeSwitch';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => (
  <Container>
    <Wrapper>
      <SearchBox>
        <Icon />
        <Input placeholder="Pesquisar contato..." />
      </SearchBox>
      <ThemeSwitch toggleTheme={toggleTheme} />
    </Wrapper>
  </Container>
);
export default Header;

const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.colors.header};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  width: 320px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
`;

const SearchBox = styled(Box)`
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.searchBar};
  margin-right: 25px;
`;

const Input = styled(InputBase)`
  background-color: ${(props) => props.theme.colors.searchBar};
  width: 220px;
  height: 30px;
  border-radius: 10px;
  padding-left: 10px;

  ::placeholder {
    pad-left: 10px;
  }
`;

const Icon = styled(SearchIcon)`
  color: #a5a5a5;
  margin-left: 5px;
`;
