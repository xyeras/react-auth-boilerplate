import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  exact: boolean;
  path: string;
  component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  exact,
  path,
  component,
}) => {
  // check to see if localStorage has a token saved
  const token = localStorage.getItem('token');
  console.log('what is token?', token);
  // if it does then we should be able to login
  // if it doesn't then we should be redirected to the login page
  return token ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to='/auth/login' />
  );
};

export default PrivateRoute;
