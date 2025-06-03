import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';

// MainContainer - user homepage (already implemented as dedicated container; import it if available)
import MainContainer from "./containers/MainContainer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./containers/AdminDashboard";

// Lightweight in-memory admin auth for demo (not persisted)
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Route protection wrapper
  function ProtectedRoute({ children }) {
    // Only allow access if logged in admin
    return isAdmin ? children : <Navigate to="/admin-login" replace />;
  }

  // If you want to preserve intended path after login, use useLocation etc.

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

            {/* Admin route (protected) */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <div className="container">
                    <AdminDashboard />
                  </div>
                </ProtectedRoute>
              }
            />

            {/* Admin login page */}
            <Route
              path="/admin-login"
              element={
                <div className="container main-content">
                  <AdminLogin onLogin={setIsAdmin} isLoggedIn={isAdmin} />
                  {/* If logged in, redirect to dashboard */}
                  {isAdmin ? <Navigate to="/admin" replace /> : null}
                </div>
              }
            />

            {/* Any other routes redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
