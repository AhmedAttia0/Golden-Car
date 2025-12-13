import { FiX } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../../../Services/dataService";
import CustomSpinner from "../../../components/LoadingSpinner";
export default function CreateUserModal({ user }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => {
      if (user) {
        // return UpdateCar({ id: user.id, formData: data });
      } else {
        return addUser(data);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      handleOpen();
    },
    onMutate: () => {
      setSubmitting(true);
    },
    onSettled: () => {
      setSubmitting(false);
    },
  });

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(!open);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) newErrors.first_name = "الاسم الأول مطلوب";
    else if (formData.first_name.trim().length < 3)
      newErrors.first_name = "الاسم يجب أن يكون 3 أحرف على الأقل";

    if (!formData.last_name.trim()) newErrors.last_name = "اللقب مطلوب";
    else if (formData.last_name.trim().length < 3)
      newErrors.last_name = "اللقب يجب أن يكون 3 أحرف على الأقل";

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
    setErrors(newErrors);
    console.log(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    console.log("formData", formData);

    if (!validateForm()) return;
    console.log(2);

    mutate(formData);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-[#5937e0] hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors w-full md:w-auto"
      >
        <FiPlus className="text-xl" />
        إضافة مستخدم جديد
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          {(isLoading || submitting) && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
              <CustomSpinner />
            </div>
          )}
          <div className="bg-[#0f1729] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-transparent px-6 py-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">إنشاء حساب جديد</h2>

              <button
                onClick={() => {
                  setOpen(false);
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
                <label className="block text-right font-semibold mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="أدخل الاسم الأول"
                  className={`w-full px-4 py-3 bg-transparent border rounded-lg text-right ${
                    errors.first_name ? "border-red-500" : "border-gray-300"
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
                <label className="block text-right font-semibold mb-2">
                  اللقب
                </label>
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
                    errors.confirm_password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.confirm_password && (
                  <p className="text-red-500 text-sm text-right mt-1">
                    {errors.confirm_password}
                  </p>
                )}
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
      )}
    </>
  );
}
