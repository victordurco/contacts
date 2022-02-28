import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  return <Header>Hello World</Header>;
};

export default Home;
