import React from "react";
import { FiX } from "react-icons/fi";

export default function CreateUserModal({
  isModalOpen,
  setIsModalOpen,
  formData,
  errors,
  handleInputChange,
  handleSubmit,
  setErrors,
}) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-[#0f1729] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-transparent px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">إنشاء حساب جديد</h2>

          <button
            onClick={() => {
              setIsModalOpen(false);
              setErrors({});
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* الاسم */}
          <div>
            <label className="block text-right font-semibold mb-2">الاسم</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              placeholder="أدخل الاسم الأول"
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.first_name}
              </p>
            )}
          </div>

          {/* اللقب */}
          <div>
            <label className="block text-right font-semibold mb-2">اللقب</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              placeholder="لقب العائلة"
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                errors.last_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.last_name}
              </p>
            )}
          </div>

          {/* الهاتف */}
          <div>
            <label className="block text-right font-semibold mb-2">
              الهاتف
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="01012345678"
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* البريد الإلكتروني */}
          <div>
            <label className="block text-right font-semibold mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* كلمة السر */}
          <div>
            <label className="block text-right font-semibold mb-2">
              كلمة السر
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="كلمة السر الخاصة بك"
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* تأكيد كلمة السر */}
          <div>
            <label className="block text-right font-semibold mb-2">
              تأكيد كلمة السر
            </label>
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              placeholder="أعد إدخال كلمة السر"
              className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                errors.confirm_password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirm_password && (
              <p className="text-red-500 text-sm text-right mt-1">
                {errors.confirm_password}
              </p>
            )}
          </div>

          {/*دور المستخدم*/}
          <div>
            <label className="block text-right font-semibold mb-2">
              دور المستخدم
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-right"
            >
              <option value="user">مستخدم عادي</option>
              <option value="admin">مشرف</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#5937e0] hover:bg-purple-700 text-white font-bold py-4 rounded-lg"
          >
            إنشاء حساب
          </button>
        </div>
      </div>
    </div>
  );
}
