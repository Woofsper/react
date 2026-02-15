import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Navigation from './components/Navigation';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('woof-sper-session');
    if (session) setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('woof-sper-session', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('woof-sper-session');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-brand-stone pb-20">
        {isLoggedIn && <Navigation onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/login"
            element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/history"
            element={isLoggedIn ? <History /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
