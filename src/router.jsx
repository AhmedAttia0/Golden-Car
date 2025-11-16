import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/carDetails/Details";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";

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
      { path: "signUp", element: <SignUp /> },
    ],
  },
]);
