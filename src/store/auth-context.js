import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  email: "",
  role: "",
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [loggedEmail, setLoggedEmail] = useState();
  const [loggedRole, setLoggedRole] = useState();

  function authenticate(token, email, role) {
    setAuthToken(token);
    setLoggedEmail(email);
    setLoggedRole(role);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
  }

  function logout() {
    setAuthToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    email: loggedEmail,
    role: loggedRole,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
