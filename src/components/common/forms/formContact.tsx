import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px 32px;
  margin: auto;
  background: #fff;

  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
        max-width: 768px;
        width: 60%;
    `,
  })}
`;

const TextInput = styled.input`
  width: 90%;
  margin: auto;
  height: 32px;
`;

const Title = styled.h1`
  margin: auto;
  padding: 8px 0;
`;

const OptionText = styled.h3`
  padding-left: 5%;
`;

const FormButton = styled.h2`
  margin: auto;
  padding: 16px;
`;

export default function FormContact() {
  return (
    <WrapperForm>
      <Title>ENVIE SUA MENSAGEM</Title>
      <OptionText>Seu nome</OptionText>
      <TextInput type="text" id="name" />
      <OptionText>Seu email</OptionText>
      <TextInput type="text" id="email" />
      <OptionText>Sua mensagem</OptionText>
      <TextInput type="text" id="message" />
      <FormButton>ENVIAR</FormButton>
    </WrapperForm>
  );
}
