import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export function TopNav() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="top-nav">
      <div className="logo">SDB Suite</div>
      <div className="nav-links">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/list">Records</NavLink>
        <NavLink to="/form">Add</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="intro-actions">
        <button className="chip" onClick={toggleTheme}>
          {isDark ? '☀️ Light' : '🌗 Dark'}
        </button>
      </div>
    </nav>
  );
}
