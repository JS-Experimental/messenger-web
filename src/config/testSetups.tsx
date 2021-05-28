import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme, variables } from './theme/Theme.v1';

type ComponentWithMuiProps = {
    children: React.ReactNode
}

type ComponentWithMuiAndReactQueryProps = {
    children: React.ReactNode
}

export const ComponentWithMui: React.FC<ComponentWithMuiProps> = ({ children }) => (
  <MuiThemeProvider theme={{ ...theme, ...variables }}>
    {children}
  </MuiThemeProvider>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export const ComponentWithMuiAndReactQuery: React.FC<ComponentWithMuiAndReactQueryProps> = (
  { children }
) => (
  <ComponentWithMui>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ComponentWithMui>
);
