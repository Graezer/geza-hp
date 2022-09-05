import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleReCaptchaProvider reCaptchaKey="6LdELcEhAAAAAFlEW8SmMwJ8-YhJQaeSksXw8psP">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleReCaptchaProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
