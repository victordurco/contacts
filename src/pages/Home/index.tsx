import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const [search, setSearch] = useState<string>('');

  return <Header toggleTheme={toggleTheme}>Hello World</Header>;
};

export default Home;
