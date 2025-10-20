import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";
import App from "./App";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/carDetails/Details";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";

const carsList = [
  {
    id: 1,
    price: 50,
    name: "BMW",
    Category: "Sedan",
    Transmission: "اوتوماتيكي",
    hasAirConditioner: true,
  },
  {
    id: 2,
    price: 20,
    name: "Toyota",
    Category: "Sedan",
    Transmission: "يدوي",
    hasAirConditioner: true,
  },
  {
    id: 3,
    price: 100,
    name: "Toyota Camry",
    Category: "Sedan",
    Transmission: "اوتوماتيكي",
    hasAirConditioner: true,
  },
  {
    id: 4,
    price: 15,
    name: "Toyota Camry",
    Category: "Sedan",
    Transmission: "اوتوماتيكي",
    hasAirConditioner: false,
  },
  {
    id: 5,
    price: 20,
    name: "Toyota Camry",
    Category: "Sedan",
    Transmission: "اوتوماتيكي",
    hasAirConditioner: true,
  },
  {
    id: 6,
    price: 15,
    name: "Toyota Camry",
    Category: "Sedan",
    Transmission: "اوتوماتيكي",
    hasAirConditioner: false,
  },
];

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "cars",
        element: <Cars carsList={carsList} />,
        children: [
          { path: ":id", element: <CarDetails carsList={carsList} /> },
        ],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [{ path: "*", element: <NotFound /> }],
  },
]);
