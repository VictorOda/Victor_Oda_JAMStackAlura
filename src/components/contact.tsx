import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';

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

export default function Contact() {
  return (
    <WrapperContact>
      <SectionTitle>/contact</SectionTitle>
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
