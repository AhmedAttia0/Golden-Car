


import React, { useState } from 'react';
import { FiSearch, FiPlus, FiEye, FiEdit2, FiMoreVertical } from 'react-icons/fi';

export default function Users () {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const users = [
    {
      id: 1,
      initials: 'JD',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'User',
      status: 'Active',
      bookings: 12,
      joined: '2023-05-15'
    },
    {
      id: 2,
      initials: 'JS',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Admin',
      status: 'Active',
      bookings: 8,
      joined: '2023-03-10'
    },
    {
      id: 3,
      initials: 'MJ',
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      role: 'Manager',
      status: 'Active',
      bookings: 25,
      joined: '2022-11-20'
    },
    {
      id: 4,
      initials: 'SW',
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      role: 'User',
      status: 'Inactive',
      bookings: 5,
      joined: '2023-08-05'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#0f1729] text-white p-8" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">إدارة المستخدمين</h1>
          <p className="text-gray-400">إدارة المستخدمين المسجلين وبياناتهم</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
          <FiPlus className="text-xl" />
          إضافة مستخدم جديد
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
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
          className="bg-[#1a2332] text-white px-6 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none cursor-pointer"
        >
          <option value="all">جميع الأدوار</option>
          <option value="Admin">مشرف</option>
          <option value="Manager">مدير</option>
          <option value="User">مستخدم</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-[#1a2332] text-white px-6 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none cursor-pointer"
        >
          <option value="all">جميع الحالات</option>
          <option value="Active">نشط</option>
          <option value="Inactive">غير نشط</option>
        </select>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredUsers.map(user => (
          <div key={user.id} className="bg-[#1a2332] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors">
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold">
                {user.initials}
              </div>
            </div>

            {/* Name and Email */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold mb-1">{user.name}</h3>
              <p className="text-gray-400 text-sm">{user.email}</p>
            </div>

            {/* Role and Status Badges */}
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                user.role === 'Admin' ? 'bg-purple-600' : 
                user.role === 'Manager' ? 'bg-blue-600' : 
                'bg-gray-700'
              }`}>
                {user.role === 'Admin' ? 'مشرف' : 
                 user.role === 'Manager' ? 'مدير' : 
                 'مستخدم'}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                user.status === 'Active' ? 'bg-green-600' : 'bg-gray-600'
              }`}>
                {user.status === 'Active' ? 'نشط' : 'غير نشط'}
              </span>
            </div>

            {/* Stats */}
            <div className="border-t border-gray-700 pt-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">الحجوزات:</span>
                <span className="font-semibold">{user.bookings}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">تاريخ الانضمام:</span>
                <span className="font-semibold">{user.joined}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-4 border-t border-gray-700">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="عرض">
                <FiEye className="text-xl" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="تعديل">
                <FiEdit2 className="text-xl" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="المزيد">
                <FiMoreVertical className="text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-xl">لا توجد نتائج</p>
          <p className="mt-2">جرب تغيير معايير البحث أو الفلاتر</p>
        </div>
      )}
    </div>
  );
}






