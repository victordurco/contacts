import React, { useState } from 'react';
import styled from 'styled-components';

import IconButton from '@mui/material/IconButton';

import Header from '../../components/Header';
import ContactBox from '../../components/ContactBox';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <Header toggleTheme={toggleTheme}>Hello World</Header>
      <Container>
        <ContactBox />
        <ContactBox />
        <ContactBox />
        <ContactBox />
        <ContactBox />
        <ContactBox />
        <IconButton>
          <AddButton>+</AddButton>
        </IconButton>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddButton = styled.div`
  width: 60px;
  height: 60px;
  font-size: 42px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.addButton};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
