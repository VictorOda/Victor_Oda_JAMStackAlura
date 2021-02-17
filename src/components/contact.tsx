import React from 'react';
import styled from 'styled-components';
import Title from './common/title';

const WrapperContact = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 18px;
`;

const ContactInfo = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 auto;
`;

export default function Contact() {
  return (
    <WrapperContact>
      <Title>/contact</Title>
      <ContactInfo>
        &lt;contact
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;email=&quot;victor.ra.oda@gmail.com&quot;
        <br />
        /&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Get in touch!
        <br />
        &lt;/contact&gt;
      </ContactInfo>
    </WrapperContact>
  );
}
