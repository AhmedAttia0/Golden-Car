import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

import { IoMdSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useUser } from "../../../contexts/UserContext";
export default function ProfileSidebar() {
  const { user, setUser } = useUser();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="w-full md:w-72 lg:w-96 bg-white shadow-md rounded-xl p-6 flex flex-col items-center">
      {/* Profile Image */}
      <div className="relative">
        <img
          src={`${user?.image || "profile.jpg"}`}
          alt="user"
          className="w-28 h-28 rounded-full border-4 border-purple-500 object-cover"
        />

        <button className="absolute bottom-0 right-0 bg-deep-purple-400 text-white p-2 rounded-full shadow-md hover:bg-purple-700 transition">
          ✏️
        </button>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold mt-3">{user?.first_name}</h2>
      <p className="text-gray-500 text-sm">عضو منذ 2021</p>

      {/* Sidebar Links */}
      <ul className="w-[60%] mx-auto mt-4 flex flex-col gap-4 mr-10">
        <li className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-purple-600 transition">
          <MdAccountCircle className="text-2xl" />
          <span className="text-lg">معلومات الحساب</span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-purple-600 transition">
          <FaRegClock className="text-lg" />
          <span className="text-lg">سجل الإيجارات</span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-purple-600 transition">
          <IoMdSettings className="text-lg" />
          <span className="text-lg">الإعدادات</span>
        </li>
        <li
          onClick={handleLogout}
          className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-purple-600 transition"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="text-red-600 hover:text-red-700 text-lg">
            تسجيل الخروج
          </span>
        </li>
      </ul>
    </div>
  );
}
