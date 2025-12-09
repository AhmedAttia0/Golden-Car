import React, { useState } from "react";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    confirm_password: "",
    address: "",
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
    } else if (
      !/^[\p{Script=Arabic}a-zA-Z\s'-]{3,50}$/u.test(formData.first_name)
    ) {
      tempErrors.first_name =
        "يجب أن يتكون الاسم من حروف فقط و يكون بين 3 ل50 حرفًا";
    }

    // Last name
    if (!formData.last_name) {
      tempErrors.last_name = "يجب إدخال لقب العائلة";
    } else if (
      !/^[\p{Script=Arabic}a-zA-Z\s'-]{3,50}$/u.test(formData.last_name)
    ) {
      tempErrors.last_name =
        "يجب أن يتكون لقب العائلة من حروف فقط و يكون بين 3 ل50 حرفًا";
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

    //Confirm Password
    if (!formData.confirm_password) {
      tempErrors.confirm_password = "يجب تأكيد كلمة السر";
    } else if (formData.password != formData.confirm_password) {
      tempErrors.confirm_password = "كلمتا السر غير متطابقتين";
    }

    if (!formData.address) {
      tempErrors.address = "يجب إدخال العنوان";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submission successful:", formData);
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
          type={"text"}
          id={"address"}
          label={"العنوان"}
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value.trim() })
          }
          error={errors.address}
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
          * يجب أن تحتوي كلمة السر علي 8 أحرف علي الأقل و 30 حرفا علي الأكثر، و
          علي الأقل حرف كابيتال واحد، حرف سمول واحد، رقم واحد، رمز من هذه الرموز
          @?!%&*$
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
