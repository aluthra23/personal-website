import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/global.css'; // Import global CSS
// import './css/tailwind.css'; // Import Tailwind CSS


import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
