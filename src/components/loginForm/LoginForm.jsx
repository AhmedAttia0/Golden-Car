import React from "react";
import { IoCarSportSharp } from "react-icons/io5";
import InputField from "../inputField/InputField";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
const LoginForm = () => {
  const location = useLocation();
  return (
    <section
      id="login-form"
      className="bg-white rounded-xl shadow-2xl overflow-hidden text-black p-6 sm:p-10 w-100 lg:w-2/5 min-w-lg self-center"
    >
      <header
        id="branding"
        className="text-center mb-8 flex flex-col justify-center space-y-4"
      >
        <IoCarSportSharp className="text-[#5937E0] text-3xl self-center" />
        <h1 className="text-2xl">Golden Car</h1>
      </header>
      <form className="space-y-6">
        <h2 className="text-center text-2xl">أهلا بعودتك!</h2>
        <InputField type={"email"} id={"email"} label={"البريد الإلكتروني"} />
        <InputField type={"password"} id={"password"} label={"كلمة السر"} />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue"
            />
            <label
              for="remember-me"
              className="mr-2 block text-sm text-gray-900"
            >
              تذكرني
            </label>
          </div>
          <Link
            to={location.pathname}
            className="text-sm font-medium text-blue-400 hover:text-blue-700 transition duration-150"
          >
            هل نسيت كلمة السر؟
          </Link>
        </div>
        <Button
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
