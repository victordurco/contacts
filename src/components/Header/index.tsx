import React from 'react';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import ThemeSwitch from './ThemeSwitch';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => (
  <Container>
    <Wrapper>
      <Input
        id="standard-search"
        label="Procurar contato"
        type="search"
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
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
  width: 100%;
  max-width: 390px;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`;

const Input = styled(TextField)`
  background-color: ${(props) => props.theme.colors.searchBar};
  width: 242px;
  border-radius: 5px;
`;
