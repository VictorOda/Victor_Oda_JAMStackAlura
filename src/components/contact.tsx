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

const ColoredText = styled.span`
  ${(prop) => `color: ${prop.color}`}
`;

export default function Contact() {
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
        &nbsp;&nbsp;&nbsp;&nbsp;Vamos trocar uma ideia!
        <br />
        &lt;/
        <ColoredText color="#00C2DA">contact</ColoredText>
        &gt;
      </ContactInfo>
    </WrapperContact>
  );
}
