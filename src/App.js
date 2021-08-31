import React from 'react';
import { KeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import MainPage from './MainPage';

const API_URL = process.env.REACT_APP_API_HOST + '/api';

function App() {
  const token = localStorage.getItem('kc-token');
  const refreshToken = localStorage.getItem('kc-refreshToken');

  return (
    <KeycloakProvider
      initConfig={{ onLoad: 'check-sso', token, refreshToken  }}
      keycloak={Keycloak(`${API_URL}/config/keycloak`)}
      isLoadingCheck={keycloak => !keycloak.authenticated}>
        <MainPage />
    </KeycloakProvider>
  );
}

export default App;
