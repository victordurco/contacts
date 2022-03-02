import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

import Box from '@mui/material/Box';

import Header from '../../components/Header';
import ContactBox from '../../components/ContactBox';
import useApi from '../../hooks/useApi';
import { ContactFromApi } from '../../protocols/Contact';

interface Props {
  toggleTheme(): void;
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  const navigate = useNavigate();
  const { contactApi } = useApi();
  const [search, setSearch] = useState<string>('');
  const [contacts, setContacts] = useState<ContactFromApi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadContactsFromApi = () => {
    contactApi
      .getAllContacts()
      .then((res) => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadContactsFromApi();
  }, []);

  return (
    <Container>
      <Header toggleTheme={toggleTheme} />
      <Content>
        {loading ? (
          <LoadingWrapper>
            <BallTriangle color="#3B72E5" height={80} width={80} />
          </LoadingWrapper>
        ) : (
          contacts.map((contact) => (
            <ContactBox
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
            />
          ))
        )}
        <AddButton onClick={() => navigate('/contato')}>+</AddButton>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  @keyframes moveInDown {
    0% {
      opacity: 0;
      transform: translateY(-300px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  animation: moveInDown 0.4s;
`;

const Content = styled.section`
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 60px auto;
`;

const AddButton = styled(Box)`
  width: 60px;
  height: 60px;
  font-size: 42px;
  line-height: 42px;
  text-align: center;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.addButton};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 24px;
  cursor: pointer;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
