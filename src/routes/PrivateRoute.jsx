// import { Navigate } from "react-router-dom";
// import { getToken } from "../store/auth.store";

// export default function PrivateRoute({ children }) {
//   const token = getToken();
//   if (!token) return <Navigate to="/admin/login" replace />;
//   return children;
// }

import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children :  <Navigate to="/admin/login" replace />;

}




