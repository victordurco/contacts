import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

import ContactForm from '../../components/ContactForm';

const CreateOrEditContact: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');

  return (
    <Container>
      <Content>
        <BackButtonBox>
          <IconButton onClick={() => navigate('/')}>
            <Arrow />
          </IconButton>
        </BackButtonBox>
        <ContactForm>oiiii</ContactForm>
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
  padding: 40px 23px 0 23px;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 60px;
`;
