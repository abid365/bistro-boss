import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-ring loading-5xl"></span>;
  }
  //   যদি ইউজার থাকে তবে যে চিলড্রেন এর কাছে যেতে চায় সেখানে যাবে
  if (user) {
    return children;
  }
  //   আর যদি ইউজার না থাকে তবে সে লগইন পেইজে রিডাইরেক্ট করবে
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
