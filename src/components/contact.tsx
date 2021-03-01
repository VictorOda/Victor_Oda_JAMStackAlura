import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';
import FormContact from './common/forms/formContact';
import Modal from './common/modals/modal';

const WrapperContact = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTheme.background};
  width: 100%;
  display: flex;
  flex-direction: column;
  ${breakpointsMedia({
    xs: css`
      padding: 18px;
    `,
    md: css`
      padding: 36px;
    `,
  })}
`;

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.secondaryText};
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

const ContactInfo = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.smallXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.smallXS.fontWeight};
      margin: 18px auto;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.small.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.small.fontWeight};
      margin: 36px auto;
    `,
  })}
`;

const ColoredText = styled.span`
  ${(prop) => `color: ${prop.color}`}
`;

const ContactButton = styled.button`
  ${(prop) => `background-color: ${prop.color}`}
`;

export default function Contact() {
  const [isOpen, setModalOpen] = useState(false);
  return (
    <WrapperContact id="contact">
      <SectionTitle>/contact</SectionTitle>
      <ContactInfo>
        &lt;
        <ColoredText color="#00C2DA">contact</ColoredText>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ColoredText color="#00C2DA">email</ColoredText>
        =
        <ColoredText color="#00C2DA">&quot;victor.ra.oda@gmail.com&quot;</ColoredText>
        <br />
        /&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <ContactButton
          color="#00C2DA"
          onClick={() => setModalOpen(!isOpen)}
        >
          Vamos trocar uma ideia!
        </ContactButton>
        <br />
        &lt;/
        <ColoredText color="#00C2DA">contact</ColoredText>
        &gt;
      </ContactInfo>
      <Modal isOpen={isOpen} onClose={() => setModalOpen(false)}>
        <FormContact onClose={() => setModalOpen(false)} />
      </Modal>
    </WrapperContact>
  );
}
