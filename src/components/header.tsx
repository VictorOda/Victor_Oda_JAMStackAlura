import React, { useEffect, useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const WrapperHeader = styled.section`
  width: 100%;
  height: 80px;
`;

const Navbar = styled.nav<{isSticky: boolean}>`
  background-color: ${({ theme }) => theme.colors.header};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 80px;

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
`;

const Logo = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 10%;
  width: 136px;
  height: 100%;
  border: none;
`;

const LogoText = styled.span`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
`;

const WrapperLinks = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  display: flex;
  flex-direction: row-reverse;
`;

const LinkButton = styled.button`
  border: none;
  width: 100px;
  margin: 0 18px;
  background-color: transparent;
`;

const LinkText = styled.span`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.text};
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
          <LogoText>&lt;oda/&gt;</LogoText>
        </Logo>
        <WrapperLinks>
          <LinkButton><LinkText>/contact</LinkText></LinkButton>
          <LinkButton><LinkText>/about</LinkText></LinkButton>
          <LinkButton><LinkText>/projects</LinkText></LinkButton>
        </WrapperLinks>
      </Navbar>
    </WrapperHeader>
  );
}
