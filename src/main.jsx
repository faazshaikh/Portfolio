import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CvPage from './components/cv/CvPage.jsx';

// Minimal routing: /cv shows the resume viewer, everything else is the portfolio.
const isCvRoute = window.location.pathname.replace(/\/+$/, '') === '/cv';

createRoot(document.getElementById('root')).render(
  <StrictMode>{isCvRoute ? <CvPage /> : <App />}</StrictMode>
);
