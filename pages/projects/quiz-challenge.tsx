import React from 'react';
import styled, { css } from 'styled-components';
import Link from '../../src/components/common/link';
import breakpointsMedia from '../../src/theme/utils/breakpointsMedia';

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

const FeaturedProject = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.lightTheme.secondaryText};
  background-color: ${({ theme }) => theme.colors.lightTheme.secondaryText};
  display: flex;
  
  ${breakpointsMedia({
    xs: css`
      margin: 18px auto;
      width: 90%;
      flex-direction: column;
    `,
    md: css`
      margin: 36px auto;
      width: 80%;
      max-width: 1000px;
      flex-direction: row;
    `,
  })}
`;

const Screenshot = styled.img`
  cursor: pointer;
  
  ${breakpointsMedia({
    xs: css`
      width: 100%;
      height: fit-content;
    `,
    md: css`
      width: 60%;
      height: auto;
    `,
  })}
`;

const Description = styled.div`
  flex-direction: column;
  padding: 36px;
`;

const ProjectTitle = styled.a`
  color: ${({ theme }) => theme.colors.lightTheme.highlight};
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

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
  color: ${({ theme }) => theme.colors.lightTheme.mainText};
`;

export default function FourOhFour() {
  return (
    <WrapperCover>
      <SectionTitle>/projects</SectionTitle>
      <WrapperTitle>
        <Name>
          Quiz Challenge
        </Name>
      </WrapperTitle>
      <FeaturedProject>
        <Screenshot src="../../images/quiz-screenshot.jpg" alt="quiz" />
        <Description>
          <ProjectTitle href="https://1sec-quiz-pihprqx4c.vercel.app/">Quiz Challenge</ProjectTitle>
          <ProjectDescription>
            Quiz desenvolvido durante a imersão React+Next.js da Alura.
            O objetivo é tentar adivinhar de qual jogo é a música
            mas você só pode escutar 1 segundo dela!
          </ProjectDescription>
        </Description>
      </FeaturedProject>
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
