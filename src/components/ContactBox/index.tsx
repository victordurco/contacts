import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';

import useApi from '../../hooks/useApi';

interface ContactProps {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface ContainerProps {
  showDetails: boolean;
}

interface DetailTitleProps {
  margin: string;
}

const ContactBox: React.FC<ContactProps> = ({ id, name, phone, email }) => {
  const navigate = useNavigate();
  const { contactApi } = useApi();
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const nameArray = name.split(' ');
  const contactInitials = (
    nameArray[0][0] + (nameArray[1] ? nameArray[1][0] : '')
  ).toUpperCase();

  const deleteContact = () => {
    Swal.fire({
      title: 'Deletar contato?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
    }).then((result) => {
      if (result.isConfirmed) {
        contactApi
          .deleteContact(id)
          .then(() => {
            Swal.fire('Deletado!', 'O contato foi deletado', 'success').then(
              () => {
                window.location.reload();
              },
            );
          })
          .catch(() =>
            Swal.fire(
              'Oops...',
              'Tivemos um problema ao deletar contato',
              'error',
            ),
          );
      }
    });
  };

  return (
    <Container
      showDetails={showDetails}
      onClick={() => setShowDetails((value) => !value)}
    >
      <ViewWrapper>
        <ContactInitials>{contactInitials}</ContactInitials>
        <Name>{name}</Name>
      </ViewWrapper>
      <Detail onClick={(e) => e.stopPropagation()}>
        <DetailTitle margin="8px">Telefone:</DetailTitle>
        {`${phone}`}
      </Detail>
      <Detail onClick={(e) => e.stopPropagation()}>
        <DetailTitle margin="20px">E-mail:</DetailTitle>
        {`${email}`}
      </Detail>
      <ButtonsWrapper>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/contato/${id}`);
          }}
        >
          <Edit />
        </IconButton>
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            deleteContact();
          }}
        >
          <Delete />
        </IconButton>
      </ButtonsWrapper>
    </Container>
  );
};
export default ContactBox;

const Container = styled(Box)<ContainerProps>`
  width: 320px;
  height: ${(props) => (props.showDetails ? '194px' : '64px')};
  background-color: ${(props) => props.theme.colors.contactBox};
  border: 1px solid ${(props) => props.theme.colors.contactBoxBorder};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  transition: all 450ms ease-out;
  overflow: hidden;
  cursor: pointer;
`;

const ViewWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

const ContactInitials = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.contactInitials};
  color: #fff;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Name = styled.span`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  margin-left: 12px;
  text-align: center;
  line-height: 40px;
`;

const Detail = styled.div`
  width: 227px;
  height: 30px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.infoBox};
  border: 1px solid ${(props) => props.theme.colors.infoBoxBorder};
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 4px 11px;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DetailTitle = styled.span<DetailTitleProps>`
  height: inherit;
  width: fit-content;
  font-size: inherit;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.margin ? props.margin : '15px')};
  white-space: nowrap;
`;

const ButtonsWrapper = styled.div`
  width: 95px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 150px;
`;

const Edit = styled(DriveFileRenameOutlineIcon)`
  color: ${(props) => props.theme.colors.editButton};
  height: 23px;
`;

const Delete = styled(DeleteIcon)`
  color: ${(props) => props.theme.colors.deleteButton};
  height: 23px;
`;
