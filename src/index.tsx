import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { themeDefault } from './themes'
import { YMInitializer } from 'react-yandex-metrika';
import { settings } from "./settings";


ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={themeDefault} resetCSS={true}>
        <YMInitializer accounts={[settings.YandexMetrika]} />
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('vertera')
);

reportWebVitals();
