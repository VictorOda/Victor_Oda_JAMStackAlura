import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import get from 'lodash/get';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.highlight`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

interface LinkProps {
  href: string,
  children: React.ReactNode,
}

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}
