/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './SocketContext';

import './style.css';

ReactDOM.render(
  <ContextProvider>
    <App />

  </ContextProvider>,
  document.getElementById('root'),
);
// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import { ContextProvider } from './SocketContext';

// import './styles.css';

// ReactDOM.render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
//   document.getElementById('root'),
// );
