import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="logo">Orion Suite</div>
      <nav>
        <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Dashboard
        </NavLink>
        <NavLink to="/list" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Records
        </NavLink>
        <NavLink to="/form" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Add Record
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          Settings
        </NavLink>
        <button onClick={logout} className="nav-item" style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%' }}>
          Logout
        </button>
      </nav>
    </aside>
  );
}
