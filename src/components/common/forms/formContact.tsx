import React from 'react';
import styled from 'styled-components';

const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  align-content: end;
  width: 40%;
  margin: auto;
  background: #fff;
`;

export default function FormContact() {
  return (
    <WrapperForm>
      <form>
        <h1>ENVIE SUA MENSAGEM</h1>
        <h3>Seu nome</h3>
        <input type="text" id="name" />
        <h3>Seu email</h3>
        <input type="text" id="email" />
        <h3>Sua mensagem</h3>
        <input type="text" id="message" />
        <h4>ENVIAR</h4>
      </form>
    </WrapperForm>
  );
}
