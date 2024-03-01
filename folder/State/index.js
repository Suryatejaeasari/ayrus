// index.js (or any other entry file where you render your React components)

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Capitalize component names
import NewClass from './Class'; // Capitalize component names

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  root
);
