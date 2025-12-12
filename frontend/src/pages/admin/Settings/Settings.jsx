import { useState } from "react";
import { Input, Typography, Button } from "@material-tailwind/react";
import useSettings from "../../../hooks/useSettings";

function Account1() {
  const { data, isLoading, isError, error } = useSettings();

  const [form, setForm] = useState({
    companyName: data?.companyName || "",
    supportEmail: data?.supportEmail || "",
    phone: data?.phone || "",
    address: data?.address || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.companyName.trim()) newErrors.companyName = "اسم الشركة مطلوب";
    if (!form.supportEmail.trim())
      newErrors.supportEmail = "البريد الإلكتروني مطلوب";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.supportEmail))
      newErrors.supportEmail = "البريد الإلكتروني غير صالح";

    if (!form.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    else if (!/^[0-9]{11}$/.test(form.phone))
      newErrors.phone = "رقم الهاتف يجب أن يكون 11 رقم";

    if (!form.address.trim()) newErrors.address = "العنوان مطلوب";
    if (!form.city.trim()) newErrors.city = "المدينة مطلوبة";
    if (!form.state.trim()) newErrors.state = "الولاية مطلوبة";

    if (!form.zipCode.trim()) newErrors.zipCode = "الرمز البريدي مطلوب";
    else if (!/^[0-9]{5,10}$/.test(form.zipCode))
      newErrors.zipCode = "الرمز البريدي غير صالح";

    if (!form.country.trim()) newErrors.country = "الدولة مطلوبة";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) return alert(data.message || "حدث خطأ");
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ في الاتصال بالسيرفر");
    }
  };

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (isError) return <p className="text-white">{error.message}</p>;
  return (
    <section className="min-h-screen flex flex-col  p-4">
      <div className="text-right">
        <Typography variant="h5" color="white" className="mb-6">
          إعدادات التطبيق
        </Typography>
      </div>

      <div className="w-full max-w-6xl bg-navyblue rounded-lg p-8">
        <Typography variant="h5" color="white" className="mb-6">
          الإعدادات العامة
        </Typography>

        <div className="flex flex-col mt-4 space-y-6">
          {[
            { label: "اسم الشركة", name: "companyName" },
            { label: "الدعم الفني", name: "supportEmail" },
            { label: "رقم التليفون", name: "phone" },
            { label: "العنوان", name: "address" },
          ].map((field) => (
            <div key={field.name} className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                {field.label}
              </Typography>
              <Input
                size="lg"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.label}
                className="w-full placeholder-gray-300 text-white bg-gray-600"
              />
              {errors[field.name] && (
                <p className="text-red-500">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div>
          <Button className="bg-purple mt-9" onClick={handleSubmit}>
            حفظ التغييرات
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Account1;
