import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Header: React.FC = () => (
  <Container>
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
`;

const Input = styled(TextField)`
  background-color: #8ea8e0fa;
  width: 242px;
  border-radius: 5px;
`;
