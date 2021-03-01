import React from 'react';
import styled, { css } from 'styled-components';
import ReactTyped from 'react-typed';
import 'font-awesome/css/font-awesome.min.css';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px 32px;
  margin: auto;
  background: #fff;
  border: 2px solid #141517;

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

const TextArea = styled.textarea`
  width: 90%;
  margin: auto;
  height: 128px;
`;

const Title = styled.h1`
  padding-left: 5%;
`;

const OptionText = styled.h3`
  padding-left: 5%;
  margin-bottom: 4px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormButton = styled.h2`
  margin: auto;
  padding: 16px;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function FormContact() {
  const typedOptions = {
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: '_',
  };
  return (
    <WrapperForm>
      <FormHeader>
        <Title><ReactTyped strings={['Envie sua mensagem', 'Vamos trocar uma ideia', 'Escreve aí!']} {...typedOptions} /></Title>
        <CloseButton type="button">
          <i className="fa fa-times fa-3x" />
        </CloseButton>
      </FormHeader>
      <OptionText>Seu nome</OptionText>
      <TextInput type="text" id="name" />
      <OptionText>Seu email</OptionText>
      <TextInput type="text" id="email" />
      <OptionText>Sua mensagem</OptionText>
      <TextArea id="message" />
      <FormButton>ENVIAR</FormButton>
    </WrapperForm>
  );
}
