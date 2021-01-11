import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 50000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

