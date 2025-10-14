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
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
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
