import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import GlobalStyle from '../../../theme/GlobalStyle';

interface Props {
  children: React.ReactNode
}

export default function WebsiteGlobalProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
