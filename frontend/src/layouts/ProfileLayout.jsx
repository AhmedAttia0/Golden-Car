import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import ScrollToTopBtn from "../components/ScrollToTopBtn/ScrollToTopBtn";
import ProfileSidebar from "../pages/public/profile/ProfileSidebar";
export default function ProfileLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen  relative">
      <ScrollToTopBtn />

      {/* Mobile / Tablet Menu Button */}
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
      <ProfileSidebar
        className={`fixed top-0 left-0 h-full z-40 transform transition-transform duration-300
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex`}
      />

      {/* Main content */}
      <div className="flex-1 lg:ml-0 ml-0">
        <div className="p-2 lg:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
