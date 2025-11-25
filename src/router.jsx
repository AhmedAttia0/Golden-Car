import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/public/home/Home";
import Cars from "./pages/public/cars/Cars";
import CarDetails from "./pages/public/carDetails/Details";
import About from "./pages/public/about/About";
import Contact from "./pages/public/contact/Contact";
import Login from "./pages/public/login/Login";
import SignUp from "./pages/public/signUp/SignUp";
import NotFound from "./pages/public/notFound/NotFound";
import AdminLayout from "./layouts/AdminLayout";
import Overview from "./pages/admin/Overview/Overview";
import CarsManagement from "./pages/admin/CarsManagement/Cars";
import Users from "./pages/admin/Users/Users";
import Settings from "./pages/admin/Settings/Settings";
import Bookings from "./pages/admin/Bookings/Bookings";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    ErrorBoundary: NotFound,
    children: [
      { index: true, element: <Home /> },
      {
        path: "cars",
        element: <Cars />,

        children: [{ path: ":id", element: <CarDetails /> }],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
  {
    path: "admin",
    Component: AdminLayout,
    ErrorBoundary: NotFound,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "cars",
        element: <CarsManagement />,
      },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "bookings", element: <Bookings /> },
    ],
  },
]);
