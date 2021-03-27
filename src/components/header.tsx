import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';
import MoveToPosition from '../theme/utils/moveToElement/moveToElement';

const WrapperHeader = styled.section`
  width: 100%;
  ${breakpointsMedia({
    xs: css`
      height: 60px;
    `,
    md: css`
      height: 80px;
    `,
  })}
`;

const Navbar = styled.nav<{isSticky: boolean}>`
  background-color: ${({ theme }) => theme.colors.header.background};
  border-top: 2px solid ${({ theme }) => theme.colors.header.highlight};
  width: 100%;

  ${(prop) => {
    if (prop.isSticky) {
      return `
        position: fixed;
        top: 0;
        left: 0;
      `;
    }
    return '';
  }}

${breakpointsMedia({
    xs: css`
      height: 60px;
    `,
    md: css`
      height: 80px;
    `,
  })}
`;

const Logo = styled.button`
  background-color: ${({ theme }) => theme.colors.header.highlight};
  margin-left: 10%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.header.mainText};
  &:hover {
    color: ${({ theme }) => theme.colors.header.background};
  }
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.mediumXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.mediumXS.fontWeight};
      margin: 0 8px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.medium.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.medium.fontWeight};
      margin: 0 18px;
    `,
  })}
`;

const WrapperLinks = styled.div`
  height: 100%;
  float: right;
  display: flex;
  flex-direction: row-reverse;

  ${breakpointsMedia({
    xs: css`
      padding-left: 0;
    `,
    md: css`
      padding-left: 36px;
    `,
  })}
  
`;

const LinkButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  ${breakpointsMedia({
    xs: css`
      margin: 0;
    `,
    md: css`
      margin: 0 18px;
    `,
  })}
`;

const LinkText = styled.span`
  color: ${({ theme }) => theme.colors.header.mainText};
  &:hover {
    color: ${({ theme }) => theme.colors.header.highlight};
  }
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.small.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.small.fontWeight};
    `,
  })}
`;

export default function Header() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const topBorder = document.getElementById('navbar-container').getBoundingClientRect().top;
      if (topBorder >= 0) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    };
    window.addEventListener('scroll', onScroll);

    // clean event listener
    return () => window.removeEventListener('scroll', onScroll);
  });

  return (
    <WrapperHeader id="navbar-container">
      <Navbar isSticky={isSticky}>
        <Logo>
          <LogoText onClick={() => MoveToPosition('portfolio', 'nearest')}>&lt;oda/&gt;</LogoText>
        </Logo>
        <WrapperLinks>
          <LinkButton onClick={() => MoveToPosition('contact', 'nearest')}><LinkText>/contact</LinkText></LinkButton>
          <LinkButton onClick={() => MoveToPosition('about', 'nearest')}><LinkText>/about</LinkText></LinkButton>
          <LinkButton onClick={() => MoveToPosition('projects', 'nearest')}><LinkText>/projects</LinkText></LinkButton>
        </WrapperLinks>
      </Navbar>
    </WrapperHeader>
  );
}
