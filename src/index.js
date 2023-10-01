import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './globalStyles';
import LangContextWrapper from './context/LangContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <LangContextWrapper>
        <App />
      </LangContextWrapper>
    </GlobalStyles>
  </React.StrictMode>
);