import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderWidget = (node) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    node
  );
}

window.unMountWidget = (node) => {
  ReactDOM.unmountComponentAtNode(node);
}

if (document.getElementById('test_root_widget')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('test_root_widget')
  );
}



