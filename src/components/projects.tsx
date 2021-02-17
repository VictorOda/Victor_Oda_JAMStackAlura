import React from 'react';
import styled from 'styled-components';

const WrapperProjects = styled.div`
  background-color: #FFF;
  width: 100%;
  min-height: 300px;
  padding: 18px
`;

const Title = styled.span`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.header};
`;

const FeaturedProject = styled.div`
  width: 80%;
  margin: 18px auto;
  border: 2px solid ${({ theme }) => theme.colors.contrastBackground};
  display: flex;
  flex-direction: row;
`;

const Screenshot = styled.img`
  width: 60%;
  height: auto;
`;

const Description = styled.div`
  background-color: ${({ theme }) => theme.colors.contrastBackground};
  flex-direction: column;
  padding: 18px;
`;

const ProjectTitle = styled.span`
  font-weight:900;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Projects() {
  return (
    <WrapperProjects>
      <Title>/projects</Title>
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
