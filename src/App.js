import React from 'react';
import './App.css';
import { KeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import MainPage from './MainPage';

const API_URL = process.env.REACT_APP_API_HOST + '/api';

function App() {
  return (
    <KeycloakProvider
      initConfig={{ onLoad: 'login-required' }}
      keycloak={Keycloak(`${API_URL}/config/keycloak`)}
      isLoadingCheck={keycloak => !keycloak.authenticated}>
        <MainPage />
    </KeycloakProvider>
  );
}

export default App;
