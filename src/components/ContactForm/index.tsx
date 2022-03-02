/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

interface InputProps {
  mask: string;
}

const ContactForm: React.FC = () => (
  <Form component="form">
    <InputField
      sx={{ mb: 3.5 }}
      variant="filled"
      label="Nome"
      type="text"
      required
    />
    <InputMask mask="(99) 99999-9999">
      {(inputProps: InputProps) => (
        <InputField
          {...inputProps}
          type="tel"
          variant="filled"
          label="Telefone"
          sx={{ mb: 3.5 }}
          required
        />
      )}
    </InputMask>
    <InputField
      sx={{ mb: 3.5 }}
      variant="filled"
      label="E-mail"
      type="email"
      required
    />
    <SaveButton
      type="submit"
      variant="contained"
      color="success"
      sx={{ mt: 5 }}
    >
      Salvar
    </SaveButton>
  </Form>
);

export default ContactForm;

const Form = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const InputField = styled(TextField)`
  width: 245px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.searchBar};
  color:background-color: ${(props) => props.theme.colors.text};
`;

const SaveButton = styled(Button)`
  width: 146px;
  height: 52px;
`;
