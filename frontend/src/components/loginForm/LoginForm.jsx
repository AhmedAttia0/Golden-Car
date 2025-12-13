import React, { useState, useContext } from "react";
import { IoCarSportSharp } from "react-icons/io5";
import InputField from "../inputField/InputField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const [errors, setErrors] = useState({});
  const { setUser } = useContext(UserContext);
  const validate = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "يجب إدخال البريد الإلكتروني";
    } else if (
      !/^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(
        formData.email
      )
    ) {
      tempErrors.email =
        "البريد الإلكتروني يجب أن يطابق هذا النمط example@example.com";
    }
    if (!formData.password) {
      tempErrors.password = "يجب إدخال كلمة السر";
    } else if (formData.password.length < 8 || formData.password.length > 30) {
      tempErrors.password =
        "كلمة السر يجب أن تكون 8 أحرف على الأقل و 30 حرفا على الأكثر";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      tempErrors.password = "كلمة السر غير مطابقة للمعايير المحددة";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          remember_me: formData.remember_me,
        }),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "فشل تسجيل الدخول");
      }

      const data = await res.json();
      // dispatch user to context
      if (data.user) {
        const payload = {
          first_name: data.user.first_name,
          last_name: data.user.last_name,
          email: data.user.email,
          phone: data.user.phone,
          id: data.user.id,
        };
        setUser({ ...payload });
        navigate("/");
      } else {
        setErrors({ general: data?.message || "فشل تسجيل الدخول." });
      }
    } catch (err) {
      setErrors({ general: "فشل تسجيل الدخول. يرجى التحقق من بياناتك." });
    }
  };
  return (
    <section
      id="login-form"
      className="bg-white rounded-xl shadow-2xl overflow-hidden text-black p-6 sm:p-10 w-full md:max-w-[70%] lg:max-w-[40%] lg:w-2/5 self-center"
    >
      <header
        id="branding"
        className="text-center mb-8 flex flex-col justify-center space-y-4"
      >
        <IoCarSportSharp className="text-[#5937E0] text-3xl self-center" />
        <h1 className="text-2xl">Golden Car</h1>
      </header>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl">أهلا بعودتك!</h2>
        {errors.general && (
          <p className="text-2xl text-red-600">{errors.general}</p>
        )}
        <InputField
          type={"text"}
          id={"email"}
          label={"البريد الإلكتروني"}
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value.trim() })
          }
          error={errors.email}
        />
        <InputField
          type={"password"}
          id={"password"}
          label={"كلمة السر"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value.trim() })
          }
          error={errors.password}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              checked={formData.remember_me}
              onChange={(e) =>
                setFormData({ ...formData, remember_me: e.target.checked })
              }
              className="h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
            />
            <label className="mr-2 block text-sm text-gray-900">تذكرني</label>
          </div>
          <Link
            to={location.pathname}
            className="text-sm font-medium text-blue-400 hover:text-blue-700 transition duration-150"
          >
            هل نسيت كلمة السر؟
          </Link>
        </div>
        <Button
          type="submit"
          className={
            "w-full bg-[#5937E0] text-white py-3 px-4 text-center font-semibold border border-transparent hover:bg-purple-900"
          }
        >
          تسجيل دخول
        </Button>
        <p className="text-sm text-slate-700 text-center">
          ليس لديك حساب ؟ قم ب
          <Link
            to={"/signup"}
            className="text-sm text-orange-300 hover:text-orange-500"
          >
            إنشاء حساب
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
