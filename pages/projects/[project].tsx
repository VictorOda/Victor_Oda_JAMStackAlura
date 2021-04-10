/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { css } from 'styled-components';
import { GraphQLClient, gql } from 'graphql-request';
import Link from '../../src/components/common/link/link';
import breakpointsMedia from '../../src/theme/utils/breakpointsMedia';
import db from '../../db.json';
import websitePageHOC from '../../src/components/common/wrappers/hoc';

const WrapperCover = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTheme.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex: wrap;
  flex-direction: column;
  justify-content: space-between;

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

const Code = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.mediumXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.mediumXS.fontWeight};
      margin-left: 32px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.medium.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.medium.fontWeight};
      margin-left: 124px;
    `,
  })}
`;

const ColoredText = styled.span`
  ${(prop) => `color: ${prop.color}`}
`;

const FeaturedProject = styled.div`
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

const ProjectTitle = styled.h1`
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
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
`;

const ProjectCTA = styled.h3`
  font-size: ${({ theme }) => theme.typographyVariants.mediumXS.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.name.fontWeight};
  color: ${({ theme }) => theme.colors.darkTheme.secondaryText};
`;

const ProjectLink = styled.a`
  font-size: ${({ theme }) => theme.typographyVariants.smallXS.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.smallXS.fontWeight};
  color: ${({ theme }) => theme.colors.darkTheme.highlight};
`;

interface Props {
  title: string,
  description: string,
  projectUrl: string,
  image: string,
}

function ProjectPage({
  title, description, projectUrl, image,
}: Props) {
  console.log(title);
  return (
    <WrapperCover>
      <SectionTitle>/projects</SectionTitle>
      <WrapperTitle>
        <Name>
          {title}
        </Name>
      </WrapperTitle>
      <FeaturedProject>
        <Screenshot src={image} alt="quiz" />
        <Description>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectDescription>
            {description}
          </ProjectDescription>
          <ProjectCTA>Visite o site</ProjectCTA>
          <ProjectLink href={projectUrl}>{projectUrl}</ProjectLink>
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

export default websitePageHOC(ProjectPage, {
  seoProps: { headTitle: 'Projetos' },
});

export async function getStaticProps({ params }) {
  const TOKEN = '8f012695cfe40164988127d554aadf';
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const query = gql`
    query {
      allProjects {
        title
        description
        projectUrl
        image {
          id
        }
      }
    }
  `;
  const projects = await client.request(query);

  const selectedProject = projects.allProjects.find((project) => {
    if (project.slug === params.project) {
      return project;
    }
    return {};
  });
  console.log('Selected', selectedProject);
  return {
    props: {
      title: selectedProject.title,
      description: selectedProject.description,
      projectUrl: selectedProject.projectUrl,
      image: selectedProject.image.id,
    },
  };
}

export async function getStaticPaths() {
  const TOKEN = '8f012695cfe40164988127d554aadf';
  const DatoCMSURL = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const query = gql`
    query {
      allProjects {
        title
        description
        projectUrl
        slug
        image {
          id
        }
      }
    }
  `;
  const projects = await client.request(query);
  const paths = projects.allProjects.reduce((projetosAcumulados, projeto) => [
    ...projetosAcumulados,
    { params: { project: projeto.slug } },
  ], []);
  return {
    paths,
    fallback: false,
  };
}
