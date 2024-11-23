import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import App from './App';
import './index.css';

emailjs.init("ZRYlOF3dpkaEiHGbm");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);