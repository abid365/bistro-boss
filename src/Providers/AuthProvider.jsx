import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authinfo = { user, loading };
  return;
  <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;