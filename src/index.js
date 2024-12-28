import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
