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