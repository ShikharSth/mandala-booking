import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import EventDetails from './components/EventDetails.jsx';
import MainBody from './components/MainBody.Jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/mandala-booking/">
      <Header />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  </StrictMode>
);
