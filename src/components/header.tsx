import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WrapperHeader = styled.section`
  width: 100vw;
  height: 80px;
`;

const Navbar = styled.nav<{isSticky: boolean}>`
  background-color: ${({ theme }) => theme.colors.header};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100vw;
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
        Test
      </Navbar>
    </WrapperHeader>
  );
}
