import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import InitComparisons from './components/Slider/components/initComparisons';

import './reset.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <InitComparisons/>
  </React.StrictMode>,
  document.getElementById('root')
);
