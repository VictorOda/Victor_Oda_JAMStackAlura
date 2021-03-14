/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';
import { Repo } from '../models/repo';

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
  max-width: 1000px;
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

interface AboutProps {
  repos: Repo[];
}

export default function About({ repos }: AboutProps) {
  console.log('repos', repos);
  return (
    <WrapperAbout id="about">
      <SectionTitle>/about</SectionTitle>
      <Description>
        Formado em Ciência da Computação pela Universidade Federal do Paraná,
        eu possuo mais de 6 anos de experiência em desenvolvimento de software.
        Destes, 5 anos foram focados em desenvolvimento de jogos utilizando a Unity
        como engine e C# como linguagem de programação. Durante 3 anos liderei uma
        equipe de desenvolvedores e designers que juntos criamos mais de 300
        jogos de celular, prezando não somente pela qualidade mas também em entregar
        os projetos no prazo definido.
        <br />
        <br />
        Querendo mudar de área, estou agora focando no Front-End, sempre estudando e
        buscando novos conhecimentos. Atualmente estou participando do Bootcamp da Alura
        de JAM Stack!
        <br />
        <br />
        Recentemente também tive a oportunidade de me juntar ao time da&nbsp;
        <a href="https://wuzu.io">Wuzu</a>
        ! Ajudando a equipe de desenvolvimento a criar diversos produtos para o mercado financeiro.
      </Description>
      {repos && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.name}>
              {console.log(repo.html_url)}
              <a href={repo.html_url}>{repo.name}</a>
              <p>{repo.description}</p>
            </li>
          ))}
        </ul>
      )}
    </WrapperAbout>
  );
}
