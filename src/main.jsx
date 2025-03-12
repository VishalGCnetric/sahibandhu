import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Import necessary components
import './index.css';
import App from './App.jsx';
import Calculator from './components/pages/Calculator.jsx';
import Header from './components/Header.jsx';
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<App />} />  {/* Define route for "/" to render App */}
        <Route path="/products" element={<Calculator />} />  {/* Define route for "/" to render App */}

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
