import React from "react";
import { FiSearch } from "react-icons/fi";

export default function UserFilters({
  searchTerm,
  setSearchTerm,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8">

      <div className="flex-1 relative">
        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="البحث عن المستخدمين بالاسم أو البريد الإلكتروني..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1a2332] text-white px-12 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
        />
      </div>

      <select
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
        className="bg-[#1a2332] text-white px-6 py-3 rounded-lg border border-gray-700 cursor-pointer"
      >
        <option value="all">جميع الأدوار</option>
        <option value="Admin">مشرف</option>
        <option value="Manager">مدير</option>
        <option value="User">مستخدم</option>
      </select>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="bg-[#1a2332] text-white px-6 py-3 rounded-lg border border-gray-700 cursor-pointer"
      >
        <option value="all">جميع الحالات</option>
        <option value="Active">نشط</option>
        <option value="Inactive">غير نشط</option>
      </select>

    </div>
  );
}
