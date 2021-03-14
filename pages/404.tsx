import React from 'react';
import ReactTyped from 'react-typed';
import styled, { css } from 'styled-components';
import Link from '../src/components/common/link';
import breakpointsMedia from '../src/theme/utils/breakpointsMedia';

const WrapperCover = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTheme.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex: wrap;
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

const WrapperTitle = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.span` 
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.nameXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.nameXS.fontWeight};
      margin-left: 32px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.name.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.name.fontWeight};
      margin-left: 124px;
    `,
  })}
`;

const Job = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.jobTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.jobTitleXS.fontWeight};
      margin-left: 32px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.jobTitle.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.jobTitle.fontWeight};
      margin-left: 124px;
    `,
  })}
`;

const Code = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.mediumXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.mediumXS.fontWeight};
      margin-left: 32px;
      margin-bottom: 18px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.medium.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.medium.fontWeight};
      margin-left: 196px;
      margin-bottom: 72px;
    `,
  })}
`;

const ColoredText = styled.span`
  ${(prop) => `color: ${prop.color}`}
`;

export default function FourOhFour() {
  const typedOptions = {
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '_',
    loop: true,
  };
  return (
    <WrapperCover>
      <SectionTitle>/%&!*&6@#</SectionTitle>
      <WrapperTitle>
        <Name>
          404.
        </Name>
        <Job>
          <ReactTyped strings={['Página não encontrada :(', 'Como você veio parar aqui?']} {...typedOptions} />
        </Job>
      </WrapperTitle>
      <Code>
        <Link href="/">
          &lt; Voltar para a
          {' '}
          <ColoredText color="#00C2DA">HOME</ColoredText>
        </Link>
      </Code>
    </WrapperCover>
  );
}
