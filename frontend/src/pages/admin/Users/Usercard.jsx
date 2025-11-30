import React from "react";
import { FiEye, FiEdit2, FiMoreVertical } from "react-icons/fi";

export default function UserCard({ user }) {
  return (
    <div className="bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition">

      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
          {user.initials}
        </div>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold">{user.name}</h3>
        <p className="text-gray-400 text-sm">{user.email}</p>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            user.role === "Admin"
              ? "bg-purple-600"
              : user.role === "Manager"
              ? "bg-blue-600"
              : "bg-gray-700"
          }`}
        >
          {user.role === "Admin"
            ? "مشرف"
            : user.role === "Manager"
            ? "مدير"
            : "مستخدم"}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            user.status === "Active" ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          {user.status === "Active" ? "نشط" : "غير نشط"}
        </span>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">الحجوزات:</span>
          <span className="font-semibold">{user.bookings}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">تاريخ الانضمام:</span>
          <span className="font-semibold">{user.joined}</span>
        </div>
      </div>

      <div className="flex justify-center gap-4 border-t border-gray-700 pt-4">
        <button className="p-2 hover:bg-gray-700 rounded-lg">
          <FiEye className="text-xl" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-lg">
          <FiEdit2 className="text-xl" />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-lg">
          <FiMoreVertical className="text-xl" />
        </button>
      </div>

    </div>
  );
}
