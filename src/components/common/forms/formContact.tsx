import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ReactTyped from 'react-typed';
import 'font-awesome/css/font-awesome.min.css';
import Lottie from 'react-lottie';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import lottieError from '../../../lotties/error.json'
import lottieSuccess from '../../../lotties/success.json'

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px 32px;
  margin: auto;
  background: #fff;
  border: 2px solid #141517;
  width: 100%;
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
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontWeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.sectionTitle.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.sectionTitle.fontWeight};
    `,
  })}
`;

const OptionText = styled.h3`
  padding-left: 5%;
  margin-bottom: 4px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormButton = styled.button`
  margin: 16px auto;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.highlightTheme.background};
  color: ${({ theme }) => theme.colors.highlightTheme.secondaryText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.highlightTheme.highlight};
    cursor: not-allowed;
    opacity: .5;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

interface FormProps {
  onClose(): void
}

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const ButtonWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: auto;
`;

export default function FormContact({ onClose }: FormProps) {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [messageInfo, setMessageInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('id');
    setMessageInfo({
      ...messageInfo,
      [fieldName]: event.target.value,
    });
    console.log('messageInfo', messageInfo);
  }

  const isFormInvalid = messageInfo.name.length === 0
    || messageInfo.email.length === 0
    || messageInfo.message.length === 0;

  const typedOptions = {
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: '_',
  };

  const lottieOptionsSuccess = {
    loop: false,
    autoplay: true,
    animationData: lottieSuccess,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const lottieOptionsError = {
    loop: false,
    autoplay: true,
    animationData: lottieError,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <WrapperForm
      onSubmit={(event) => {
        event.preventDefault();
        setFormSubmitted(true);

        const messageDTO = {
          name: messageInfo.name,
          email: messageInfo.email,
          message: messageInfo.message,
        };

        fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(messageDTO),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Não foi possível enviar a mensagem =/');
          })
          .then((responseObj) => {
            setSubmissionStatus(formStates.DONE);
            console.log('response', responseObj);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            console.log(error);
          })
          .finally(() => {
            setMessageInfo({
              name: '',
              email: '',
              message: '',
            });
            console.log('finally');
          });
      }}
    >
      <FormHeader>
        <Title><ReactTyped strings={['Envie sua mensagem', 'Vamos trocar ideias', 'Escreve aí!']} {...typedOptions} /></Title>
        <CloseButton type="button" onClick={onClose}>
          <i className="fa fa-times fa-3x" />
        </CloseButton>
      </FormHeader>
      <OptionText>Seu nome</OptionText>
      <TextInput type="text" id="name" value={messageInfo.name} onChange={handleChange} />
      <OptionText>Seu email</OptionText>
      <TextInput type="text" id="email" value={messageInfo.email} onChange={handleChange} />
      <OptionText>Sua mensagem</OptionText>
      <TextArea id="message" value={messageInfo.message} onChange={handleChange} />
      <ButtonWrapper>
        {isFormSubmitted && submissionStatus === formStates.DONE && (
          <Lottie options={lottieOptionsSuccess} />
        )}
        {isFormSubmitted && submissionStatus === formStates.ERROR && (
          <Lottie options={lottieOptionsError} />
        )}
        {!isFormSubmitted && <FormButton disabled={isFormInvalid}>ENVIAR</FormButton>}
      </ButtonWrapper>
    </WrapperForm>
  );
}
