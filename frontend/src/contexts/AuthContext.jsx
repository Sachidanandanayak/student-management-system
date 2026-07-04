import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('dashboard-auth') === 'logged-in'
  );

  const login = () => {
    localStorage.setItem('dashboard-auth', 'logged-in');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('dashboard-auth');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
