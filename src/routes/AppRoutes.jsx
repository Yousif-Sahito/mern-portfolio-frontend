import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/public/Home.jsx";

import Login from "../pages/admin/Login.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import AdminProjects from "../pages/admin/Projects.jsx";
import AdminMessages from "../pages/admin/Messages.jsx";
import AdminSettings from "../pages/admin/Settings.jsx";

import PrivateRoute from "./PrivateRoute.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />

      {/* Admin Auth */}
      <Route path="/admin/login" element={<Login />} />

      {/* Admin Protected */}
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/projects"
        element={
          <PrivateRoute>
            <AdminProjects />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/messages"
        element={
          <PrivateRoute>
            <AdminMessages />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/settings"
        element={
          <PrivateRoute>
            <AdminSettings />
          </PrivateRoute>
        }
      />

      {/* ✅ Fallback: prevent blank page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


// import { Routes, Route, Navigate } from "react-router-dom";

// import Home from "../pages/public/Home.jsx";

// import Login from "../pages/admin/Login.jsx";
// import Dashboard from "../pages/admin/Dashboard.jsx";
// import AdminProjects from "../pages/admin/Projects.jsx";
// import AdminMessages from "../pages/admin/Messages.jsx";
// import AdminSettings from "../pages/admin/Settings.jsx";

// import PrivateRoute from "./PrivateRoute.jsx";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       {/* Public */}
//       <Route path="/" element={<Home />} />

//       {/* Admin Auth */}
//       <Route path="/admin/login" element={<Login />} />

//       {/* Admin Protected */}
//       <Route
//         path="/admin"
//         element={
//           <PrivateRoute>
//             <Dashboard />
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/admin/projects"
//         element={
//           <PrivateRoute>
//             <AdminProjects />
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/admin/messages"
//         element={
//           <PrivateRoute>
//             <AdminMessages />
//           </PrivateRoute>
//         }
//       />

//       <Route
//         path="/admin/settings"
//         element={
//           <PrivateRoute>
//             <AdminSettings />
//           </PrivateRoute>
//         }
//       />

//       {/* ✅ Fallback: prevent blank page */}
//       <Route path="*" element={<Navigate to="/" replace />} />
//     </Routes>
//   );
// }

