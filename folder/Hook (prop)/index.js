// index.js (or any other entry file where you render your React components)

import React from 'react';
import ReactDOM from 'react-dom';
import NewFun from './function'; // Capitalize component names
import NewClass from './Class'; // Capitalize component names

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <NewFun firstname="Surya"/> {/* Correct component name */}
    <NewClass name="lam"/> {/* Correct component name */}
  </React.StrictMode>,
  root
);
