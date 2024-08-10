import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import SubmitMoviePage from './pages/SubmitMoviePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/submit" element={<SubmitMoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;