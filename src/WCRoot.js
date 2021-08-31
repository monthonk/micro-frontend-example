import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import App from './App';

// web component root
class WCRoot extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('div');
    // first we need to store a reference to an element INSIDE of the shadow root        
    const reactRoot = shadowRoot.appendChild(mountPoint);

    const appStyles = document.createElement('style');
    appStyles.innerHTML = `.App {
      text-align: center;
    }
    
    .App-logo {
      height: 40vmin;
      pointer-events: none;
    }
    
    @media (prefers-reduced-motion: no-preference) {
      .App-logo {
        animation: App-logo-spin infinite 20s linear;
      }
    }
    
    .App-header {
      background-color: #282c34;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }
    
    .App-link {
      color: #61dafb;
    }
    
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    `;
    shadowRoot.appendChild(appStyles);

    const indexStyles = document.createElement('style');
    indexStyles.innerHTML = `body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }`;
    shadowRoot.appendChild(indexStyles);

    // now we use that saved reference to create a JSS configuration
    const jss = create({
        ...jssPreset(),
        insertionPoint: reactRoot
    });

    // finally we need to wrap our application in a StylesProvider
    ReactDOM.render(
        <StylesProvider jss={jss}>
            <App />
        </StylesProvider>,
        mountPoint);
  }
}

export default WCRoot;