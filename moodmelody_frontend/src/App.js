import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Placeholder for MainContainer (user-facing)
function MainContainer() {
  return (
    <div className="container main-content">
      <div className="hero">
        <div className="subtitle">Mood-based Music Recommendation</div>
        <h1 className="title">MoodMelody</h1>
        <div className="description">
          Select your mood, pick your language, and let the music match your vibe.
        </div>
        <button className="btn btn-large">Get Started</button>
      </div>
    </div>
  );
}

// Placeholder for AdminDashboard
function AdminDashboard() {
  return (
    <div className="container admin-dashboard">
      <h2 className="title">Admin Dashboard</h2>
      <p className="description">
        Manage mood-language-song mapping and view analytics here. (WIP)
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container navbar-content">
            <div className="logo">
              <span className="logo-symbol">♪</span> MoodMelody
            </div>
            <div className="nav-links">
              <a href="/" className="btn btn-nav">Home</a>
              <a href="/admin" className="btn btn-nav">Admin</a>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
