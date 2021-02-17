import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';

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
  flex-direction: row;
  ${breakpointsMedia({
    xs: css`
      margin: 18px auto;
      width: 500px;
    `,
    md: css`
      margin: 36px auto;
      min-width: 500px;
      width: 80%;
    `,
  })}
`;

const Screenshot = styled.img`
  width: 60%;
  height: auto;
`;

const Description = styled.div`
  flex-direction: column;
  padding: 18px;
`;

const ProjectTitle = styled.span`
  font-weight:900;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.lightTheme.highlight};
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightTheme.mainText};
`;

export default function Projects() {
  return (
    <WrapperProjects>
      <SectionTitle>/projects</SectionTitle>
      <FeaturedProject>
        <Screenshot src="./images/quiz-screenshot.jpg" alt="quiz" />
        <Description>
          <ProjectTitle>Quiz Challenge</ProjectTitle>
          <ProjectDescription>
            Quiz desenvolvido durante a imersão next.js da Alura.
            O objetivo é tentar adivinhar de qual jogo é a música
            mas você só pode escutar 1 segundo dela!
          </ProjectDescription>
        </Description>
      </FeaturedProject>
    </WrapperProjects>
  );
}
