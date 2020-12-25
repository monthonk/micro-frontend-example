import React from 'react';
import logo from './logo.svg';
import { useKeycloak } from '@react-keycloak/web'

const MainPage = props => {
    // Using Object destructuring
    const { keycloak, initialized } = useKeycloak()
    
    // Here you can access all of keycloak methods and variables.
    // See https://www.keycloak.org/docs/latest/securing_apps/index.html#javascript-adapter-reference

    return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`} className="App-logo" alt="logo" />
        <p>
          This is micro frontend 1
        </p>
        <p>
            {`User is ${
            !keycloak.authenticated ? 'NOT ' : ''
            }authenticated`}
        </p>
        <button type="button" onClick={() => keycloak.logout()}>
            Logout
        </button>
      </header>
    </div>
    )
}
 
export default MainPage;