import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import WCRoot from './WCRoot';

customElements.define('wc-root', WCRoot);

// render micro frontend function
window.rendercreatereactapp = (containerId, history) => {
  ReactDOM.render(
    <wc-root />,
    document.getElementById(containerId)
  );
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountcreatereactapp = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('createreactapp-container')) {
  ReactDOM.render(<wc-root />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
