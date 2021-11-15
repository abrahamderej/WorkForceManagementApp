import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//

import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Company from "./pages/Company";
import User from "./pages/User";
import NotFound from "./pages/Page404";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Demo from "./pages/Demo"

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "users", element: <User /> },
        { path: "projects", element: <Products /> },
        { path: "companies", element: <Company /> },
        { path: "clients", element: <Blog /> },
        { path: "policies", element: <Blog /> },
        { path: "profile", element: <Profile /> },
        { path: "profile/edit", element: <EditProfile /> },
        { path: "demo", element: <Demo /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/login" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
