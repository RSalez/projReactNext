'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifica se há usuário salvo
    const saved = localStorage.getItem('authUser');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
