import React, { useState } from "react";
import UserHeader from "./Userheader";
import UserFilters from "./Userfilters";
import UserGrid from "./Usergrid";
import CreateUserModal from "./Createusermodel";

export default function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "user",
  });

  const [errors, setErrors] = useState({});

  const users = [
    {
      id: 1,
      initials: "JD",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "User",
      status: "Active",
      bookings: 12,
      joined: "2023-05-15",
    },
    {
      id: 2,
      initials: "JS",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Admin",
      status: "Active",
      bookings: 8,
      joined: "2023-03-10",
    },
    {
      id: 3,
      initials: "MJ",
      name: "Mike Johnson",
      email: "mike.j@example.com",
      role: "Manager",
      status: "Active",
      bookings: 25,
      joined: "2022-11-20",
    },
    {
      id: 4,
      initials: "SW",
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      role: "User",
      status: "Inactive",
      bookings: 5,
      joined: "2023-08-05",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "الاسم الأول مطلوب";
    else if (formData.firstName.trim().length < 3)
      newErrors.firstName = "الاسم يجب أن يكون 3 أحرف على الأقل";

    if (!formData.lastName.trim()) newErrors.lastName = "اللقب مطلوب";
    else if (formData.lastName.trim().length < 3)
      newErrors.lastName = "اللقب يجب أن يكون 3 أحرف على الأقل";

    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    else if (!/^01[0125][0-9]{8}$/.test(formData.phone))
      newErrors.phone = "رقم الهاتف غير صحيح";

    if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "البريد الإلكتروني غير صحيح";

    if (!formData.password) newErrors.password = "كلمة السر مطلوبة";
    else if (formData.password.length < 8)
      newErrors.password = "كلمة السر يجب أن تكون 8 أحرف على الأقل";
    else if (!/(?=.*[a-z])/.test(formData.password))
      newErrors.password = "يجب أن تحتوي على حرف صغير";
    else if (!/(?=.*[A-Z])/.test(formData.password))
      newErrors.password = "يجب أن تحتوي على حرف كبير";
    else if (!/(?=.*[!@#$%^&*?])/.test(formData.password))
      newErrors.password = "يجب أن تحتوي على رمز";

    if (!formData.confirm_password)
      newErrors.confirm_password = "تأكيد كلمة السر مطلوب";
    else if (formData.password !== formData.confirm_password)
      newErrors.confirm_password = "كلمتا السر غير متطابقتين";
    if (formData.role !== "user" && formData.role !== "admin")
      newErrors.role = "الدور غير صالح";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form data:", formData);

    setIsModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen text-white p-4 md:p-8" dir="rtl">
      <UserHeader onAddClick={() => setIsModalOpen(true)} />

      <UserFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <UserGrid filteredUsers={filteredUsers} />

      {filteredUsers.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-xl">لا توجد نتائج</p>
          <p className="mt-2">جرب تغيير معايير البحث أو الفلاتر</p>
        </div>
      )}

      <CreateUserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        formData={formData}
        errors={errors}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setErrors={setErrors}
      />
    </div>
  );
}
