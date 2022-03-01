import React, { useState } from 'react';
import styled from 'styled-components';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

const CreateOrEditContact: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  return (
    <Container>
      <Content>
        <BackButtonBox>
          <IconButton>
            <Arrow />
          </IconButton>
        </BackButtonBox>
      </Content>
    </Container>
  );
};

export default CreateOrEditContact;

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
`;

const Content = styled(Box)`
  width: 100%;
  max-width: 390px;
  padding-top: 20px;
`;

const Arrow = styled(ArrowBackIcon)`
  width: 35px;
  color: ${(props) => props.theme.colors.text};
`;

const BackButtonBox = styled(Box)`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;
