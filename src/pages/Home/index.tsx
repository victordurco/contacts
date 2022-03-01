import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import ContactBox from '../../components/ContactBox';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [search, setSearch] = useState<string>('');

  return (
    <Container>
      <Header toggleTheme={toggleTheme}>Hello World</Header>
      <ContactBox />
      <ContactBox />
      <ContactBox />
      <ContactBox />
      <ContactBox />
      <ContactBox />
    </Container>
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
