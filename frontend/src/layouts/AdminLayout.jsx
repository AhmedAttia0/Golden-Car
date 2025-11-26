import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import SidebarDark from "../components/Sidebar/Sidebar";
import ScrollToTopBtn from "../components/ScrollToTopBtn/ScrollToTopBtn";
const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-[#14151a] relative">
      <ScrollToTopBtn />
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#23262f] text-white rounded-md shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <IoClose className="h-6 w-6" />
        ) : (
          <IoMenu className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <SidebarDark
        className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex`}
      />

      {/* Main content */}
      <div className="flex-1 ml-0">
        <div className="p-2 lg:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
