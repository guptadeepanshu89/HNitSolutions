import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getMe, loginAdmin, logoutAdmin } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("hnit_token");
    if (!token) {
      setLoading(false);
      return;
    }

    getMe()
      .then((res) => setUser(res.data.data.user))
      .catch(() => {
        sessionStorage.removeItem("hnit_token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      async login(credentials) {
        const res = await loginAdmin(credentials);
        const { token, user: nextUser } = res.data.data;
        sessionStorage.setItem("hnit_token", token);
        setUser(nextUser);
        return nextUser;
      },
      async logout() {
        try {
          await logoutAdmin();
        } finally {
          sessionStorage.removeItem("hnit_token");
          setUser(null);
        }
      },
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
