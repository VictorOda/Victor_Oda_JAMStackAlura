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
  display: flex;
  flex-direction: column;
  align-content: center;

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

const ContactButton = styled.button`
  padding: 8px;
  font-size: ${({ theme }) => theme.typographyVariants.smallCode.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.smallCode.fontWeight};
  background-color: ${({ theme }) => theme.colors.highlightTheme.background};
  color: ${({ theme }) => theme.colors.highlightTheme.secondaryText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  outline: none;
  margin: 16px auto;
  width: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export default function Contact() {
  const [isOpen, setModalOpen] = useState(false);
  return (
    <WrapperContact id="contact">
      <SectionTitle>/contact</SectionTitle>
      <ContactInfo>
        APERTA AQUI!
        <ContactButton
          color="#00C2DA"
          onClick={() => setModalOpen(!isOpen)}
        >
          <i className="fa fa-bullhorn fa-2x" />
        </ContactButton>
      </ContactInfo>
      <Modal isOpen={isOpen} onClose={() => setModalOpen(false)}>
        <FormContact isOpen={isOpen} onClose={() => setModalOpen(false)} />
      </Modal>
    </WrapperContact>
  );
}
