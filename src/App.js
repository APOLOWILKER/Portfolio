import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tecnologias from './pages/Tecnologias';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import './styles/hoot.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<Tecnologias />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
