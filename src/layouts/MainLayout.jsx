import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import { CarsProvider } from "../context/CarsContext";
export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop behavior="smooth" />
      <Header />
      <main className="flex-1">
        <CarsProvider>
          <Outlet />
        </CarsProvider>
      </main>
      <Footer />
    </div>
  );
}
