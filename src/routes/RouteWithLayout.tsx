import React from 'react';
import { Route } from 'react-router-dom';

export interface CustomRouteProps {
  Layout: React.FunctionComponent,
  children: React.ReactNode,
  path: string,
  exact?: boolean
}

export const RouteWithLayout: React.FC<CustomRouteProps> = ({
  Layout, children, path, ...rest
}) => (
  <Route
    {...rest}
    path={path}
    render={() => (
      <Layout>
        {children}
      </Layout>
    )}
  />
);
