import React from 'react';
import AuthProvider from './Context/AuthProvider/';
import Router from '../src/Router';

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
