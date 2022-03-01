import React, { useState } from 'react';
import styled from 'styled-components';

import IconButton from '@mui/material/IconButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';

interface ContainerProps {
  showDetails: boolean;
}

const ContactBox: React.FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Container
      showDetails={showDetails}
      onClick={() => setShowDetails(!showDetails)}
    >
      <ViewWrapper>
        <ContactInitials>VD</ContactInitials>
        <Name>Victor Durço Gomes Bijos</Name>
      </ViewWrapper>
      <Detail>Phone: (14) 99837-5261</Detail>
      <Detail>E-mail: victordurco@gmail.com</Detail>
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

const Container = styled.div<ContainerProps>`
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
  border-radius: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 4px 11px;
  margin-bottom: 8px;
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
