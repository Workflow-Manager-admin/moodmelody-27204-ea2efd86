import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import MainContainer from "./containers/MainContainer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./containers/AdminDashboard";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application component.
   * Enforces react-router-dom v6 direct imports and API usage.
   */
  const [isAdmin, setIsAdmin] = useState(false);

  // Route guard for admin dashboard
  function ProtectedRoute({ children }) {
    // Only allow access if logged in as admin
    return isAdmin ? children : <Navigate to="/admin-login" replace />;
  }

  return (
    <BrowserRouter>
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
            <Route
              path="/admin-login"
              element={
                <div className="container main-content">
                  <AdminLogin onLogin={setIsAdmin} isLoggedIn={isAdmin} />
                  {isAdmin ? <Navigate to="/admin" replace /> : null}
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
