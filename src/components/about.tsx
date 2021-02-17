import React from 'react';
import styled from 'styled-components';

const WrapperAbout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 18px;
`;

const Title = styled.span`
  margin-top: 18px;
  margin-left: 18px;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.span`
  width: 80%;
  margin: 18px auto;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.contrastText};
`;

export default function About() {
  return (
    <WrapperAbout>
      <Title>/about</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Description>
    </WrapperAbout>
  );
}
