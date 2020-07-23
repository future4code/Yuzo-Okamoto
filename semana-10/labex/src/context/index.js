import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";

const Context = createContext();

function AuthProvider({ children }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = window.sessionStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = () => {
    (async () => {
      const body = {
        email: "astrodev@gmail.com.br",
        password: "123456",
      };

      try {
        const {
          data: { token },
        } = await api.post("/login", body);
        window.sessionStorage.setItem("token", JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        history.replace("/trips");
      } catch (error) {
        console.debug("context", error);
      }
    })();
  };

  const handleLogout = () => {
    setAuthenticated(false);
    window.sessionStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    history.push("/login");
  };
  return (
    <Context.Provider
      value={{ authenticated, loading, handleLogin, handleLogout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
