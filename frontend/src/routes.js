import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//

import Login from "./pages/Login";
import DashboardApp from "./pages/DashboardApp";
import Project from "./pages/Project";
import Client from "./pages/Client";
import Policy from "./pages/Policy";
import Company from "./pages/Company";
import User from "./pages/User";
import NotFound from "./pages/Page404";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { EditCompany } from "./components/_dashboard/company";

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
        { path: "projects", element: <Project /> },
        { path: "companies", element: <Company /> },
        { path: "companies/edit", element: <EditCompany /> },
        { path: "clients", element: <Client /> },
        { path: "policies", element: <Policy /> },
        { path: "profile", element: <Profile /> },
        { path: "profile/edit", element: <EditProfile /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/login" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
