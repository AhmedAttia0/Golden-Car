import { Outlet } from "react-router-dom";
import SidebarDark from "../components/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex w-full min-h-screen bg-[#14151a]">
      <SidebarDark />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
