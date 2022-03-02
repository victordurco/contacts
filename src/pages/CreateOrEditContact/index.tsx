import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

import ContactForm from '../../components/ContactForm';
import useApi from '../../hooks/useApi';
import { ContactBody } from '../../protocols/Contact';

const CreateOrEditContact: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const contactId = Number(id);
  const { contactApi } = useApi();
  const [formData, setFormData] = useState<ContactBody>({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange =
    (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  const createContact = () => {
    contactApi
      .create(formData)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const editContact = () => {
    contactApi
      .edit(formData, contactId)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const hanldeSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (contactId) editContact();
    else createContact();
  };

  return (
    <Container>
      <Content>
        <BackButtonBox>
          <IconButton onClick={() => navigate('/')}>
            <Arrow />
          </IconButton>
        </BackButtonBox>
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          onSubmit={hanldeSubmit}
        />
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
  @keyframes moveInUp {
    0% {
      opacity: 0;
      transform: translateY(300px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  animation: moveInUp 0.4s;
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
