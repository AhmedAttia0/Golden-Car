import React from "react";
import { FiPlus } from "react-icons/fi";

export default function UserHeader({ onAddClick }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">إدارة المستخدمين</h1>
        <p className="text-gray-400">إدارة المستخدمين المسجلين وبياناتهم</p>
      </div>

      <button
        onClick={onAddClick}
        className="bg-[#5937e0] hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors w-full md:w-auto"
      >
        <FiPlus className="text-xl" />
        إضافة مستخدم جديد
      </button>
    </div>
  );
}
