import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Helmet>
        <title>Calculator in React</title>
  </Helmet>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);
