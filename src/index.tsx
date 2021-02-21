import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import App from './pages/PomoTimer';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
