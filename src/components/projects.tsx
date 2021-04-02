import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';
import Link from './common/link/link';

const WrapperProjects = styled.div`
  background-color: ${({ theme }) => theme.colors.lightTheme.background};
  width: 100%;
  min-height: 300px;
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
  color: ${({ theme }) => theme.colors.lightTheme.mainText};
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

const FeaturedProject = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.lightTheme.secondaryText};
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

const ProjectTitle = styled.span`
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

export default function Projects() {
  return (
    <WrapperProjects id="projects">
      <SectionTitle>/projects</SectionTitle>
      <FeaturedProject>
        <Screenshot src="./images/quiz-screenshot.jpg" alt="quiz" />
        <Description>
          <Link href="/projects/quiz-challenge">
            <ProjectTitle>Quiz Challenge</ProjectTitle>
          </Link>
          <ProjectDescription>
            Quiz desenvolvido durante a imersão React+Next.js da Alura.
            O objetivo é tentar adivinhar de qual jogo é a música
            mas você só pode escutar 1 segundo dela!
          </ProjectDescription>
        </Description>
      </FeaturedProject>
    </WrapperProjects>
  );
}
