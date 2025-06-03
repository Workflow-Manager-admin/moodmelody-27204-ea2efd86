import React, { useState } from "react";
import "./AdminLogin.css";

// PUBLIC_INTERFACE
function AdminLogin({ onLogin, isLoggedIn }) {
  /**
   * A simple form for admin login.
   * - Accepts username/password (demo: admin/admin123)
   * - Manages its own state and calls onLogin(authenticated) on success.
   * - Hides itself if already logged in.
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo credentials
    if (username === "admin" && password === "admin123") {
      setShowError(false);
      onLogin(true);
    } else {
      setShowError(true);
    }
  };

  if (isLoggedIn) {
    return (
      <div className="adminlogin-container logged-in">
        <div className="adminlogin-success">
          <span role="img" aria-label="Welcome">🔓</span>
          Welcome, Admin!
        </div>
      </div>
    );
  }

  return (
    <div className="adminlogin-container">
      <form className="adminlogin-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="adminlogin-title">Admin Login</div>
        <input
          type="text"
          className="adminlogin-input"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          autoFocus
          required
        />
        <input
          type="password"
          className="adminlogin-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-large adminlogin-btn">
          Log In
        </button>
        {showError && (
          <div className="adminlogin-error">
            Invalid credentials. Try <b>admin</b>/<b>admin123</b>.
          </div>
        )}
      </form>
    </div>
  );
}

export default AdminLogin;
