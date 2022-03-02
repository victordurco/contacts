import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';

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
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const nameArray = name.split(' ');
  const contactInitials = (
    nameArray[0][0] + (nameArray[1] ? nameArray[1][0] : '')
  ).toUpperCase();

  return (
    <Container
      showDetails={showDetails}
      onClick={() => setShowDetails(!showDetails)}
    >
      <ViewWrapper>
        <ContactInitials>{contactInitials}</ContactInitials>
        <Name>{name}</Name>
      </ViewWrapper>
      <Detail>
        <DetailTitle margin="8px">Telefone:</DetailTitle>
        {`${phone}`}
      </Detail>
      <Detail>
        <DetailTitle margin="20px">E-mail:</DetailTitle>
        {`${email}`}
      </Detail>
      <ButtonsWrapper>
        <IconButton onClick={(e) => e.stopPropagation()}>
          <Edit />
        </IconButton>
        <IconButton onClick={(e) => e.stopPropagation()}>
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
  height: 23px;
  font-size: 12px;
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
`;

const DetailTitle = styled.span<DetailTitleProps>`
  height: inherit;
  width: fit-content;
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  margin-right: ${(props) => (props.margin ? props.margin : '15px')};
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
