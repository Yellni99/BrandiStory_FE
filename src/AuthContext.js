import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    sessionStorage.getItem("authToken") || null
  );

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (authToken && authToken !== token) {
      sessionStorage.setItem("authToken", authToken);
    }
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
    sessionStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
