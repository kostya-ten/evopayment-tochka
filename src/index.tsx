import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { themeDefault } from './themes'


ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={themeDefault} resetCSS={true}>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('vertera')
);

reportWebVitals();
