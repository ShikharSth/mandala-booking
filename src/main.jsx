import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import EventDetails from './components/EventDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/mandala-booking">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  </StrictMode>
);
