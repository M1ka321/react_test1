import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyButton from "./components/MyButton";
import Profile from "./components/profile";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

