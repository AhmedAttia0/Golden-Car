import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Cars from "./pages/cars/Cars";
import Details from "./pages/carDetails/Details";
import BookingRequest from "./pages/bookingRequest/BookingRequest";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/Header/Header";
const App = () => {
  const carsList = [
    {
      id: 1,
      price: 50,
      name: "Toyota Camry",
      Category: "Sedan",
      Transmission: "اوتوماتيكي",
      hasAirConditioner: true,
    },
    {
      id: 2,
      price: 20,
      name: "Toyota Camry",
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
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars carsList={carsList} />} />
        <Route path="/CarDetails" element={<Details />} />
        <Route path="/booking" element={<BookingRequest />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
