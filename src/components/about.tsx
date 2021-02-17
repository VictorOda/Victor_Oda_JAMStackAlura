import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';

const WrapperAbout = styled.div`
  background-color: ${({ theme }) => theme.colors.highlightTheme.background};
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
  color: ${({ theme }) => theme.colors.highlightTheme.secondaryText};
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

const Description = styled.span`
  width: 80%;
  color: ${({ theme }) => theme.colors.highlightTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
      margin: 18px auto;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
      margin: 36px auto;
    `,
  })}
`;

export default function About() {
  return (
    <WrapperAbout>
      <SectionTitle>/about</SectionTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Description>
    </WrapperAbout>
  );
}
