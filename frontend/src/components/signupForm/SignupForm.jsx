import React, { useState } from "react";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";
import { useUser } from "../../contexts/UserContext";
const SignupForm = () => {
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
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

    // First name
    if (!formData.first_name) {
      tempErrors.first_name = "يجب إدخال الاسم";
    } else if (!/^[\p{Script=Arabic}a-zA-Z\s'-]+$/u.test(formData.first_name)) {
      tempErrors.first_name = "يجب أن يتكون الاسم من حروف فقط";
    }

    // Last name
    if (!formData.last_name) {
      tempErrors.last_name = "يجب إدخال لقب العائلة";
    } else if (!/^[\p{Script=Arabic}a-zA-Z\s'-]+$/u.test(formData.last_name)) {
      tempErrors.last_name = "يجب أن يتكون لقب العائلة من حروف فقط";
    }

    // Phone number
    if (!formData.phone_number) {
      tempErrors.phone_number = "يجب إدخال رقم الهاتف";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone_number)) {
      tempErrors.phone_number = "رقم الهاتف غير صالح";
    }

    // Password
    if (!formData.password) {
      tempErrors.password = "يجب إدخال كلمة السر";
    } else if (formData.password.length < 8) {
      tempErrors.password = "كلمة السر يجب أن تكون 8 أحرف على الأقل";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      tempErrors.password = "كلمة السر غير مطابقة للمعايير المحددة";
    }

    //Confirm Password
    if (!formData.confirm_password) {
      tempErrors.confirm_password = "يجب تأكيد كلمة السر";
    } else if (formData.password != formData.confirm_password) {
      tempErrors.confirm_password = "كلمتا السر غير متطابقتين";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const { confirm_password, ...data } = formData;

      dispatch({ type: "SET_USER", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  };
  return (
    <section
      id="signup-form"
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
        <h2 className="text-center text-2xl">مرحبا بك!</h2>
        <InputField
          type={"text"}
          id={"first_name"}
          label={"الاسم"}
          value={formData.first_name}
          onChange={(e) =>
            setFormData({ ...formData, first_name: e.target.value.trim() })
          }
          error={errors.first_name}
        />
        <InputField
          type={"text"}
          id={"last_name"}
          label={"اللقب"}
          value={formData.last_name}
          onChange={(e) =>
            setFormData({ ...formData, last_name: e.target.value.trim() })
          }
          error={errors.last_name}
        />
        <InputField
          type={"text"}
          id={"phone_number"}
          label={"الهاتف"}
          value={formData.phone_number}
          onChange={(e) =>
            setFormData({ ...formData, phone_number: e.target.value.trim() })
          }
          error={errors.phone_number}
        />
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
        <p className="text-gray-500 text-sm">
          * يجب أن تحتوي كلمة السر علي 8 أحرف علي الأقل، و علي الأقل حرف كابيتال
          واحد، حرف سمول واحد، رقم واحد، رمز من هذه الرموز @?!%&*$
        </p>
        <InputField
          type={"password"}
          id={"confirm_password"}
          label={"تأكيد كلمة السر"}
          value={formData.confirm_password}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirm_password: e.target.value.trim(),
            })
          }
          error={errors.confirm_password}
        />
        <Button
          type={"submit"}
          className={
            "w-full bg-[#5937E0] text-white py-3 px-4 text-center font-semibold border border-transparent hover:bg-purple-900"
          }
        >
          إنشاء حساب
        </Button>
        <p className="text-sm text-slate-700 text-center">
          لديك حساب بالفعل ؟ قم ب
          <Link
            to={"/login"}
            className="text-sm text-orange-300 hover:text-orange-500"
          >
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignupForm;
