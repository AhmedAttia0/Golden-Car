import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
/* this is a generic template for an input field (just text fields), you can take its default style
or modify it through className, you should give it an id for naming, a label, and you may
change its type from text*/
const InputField = ({
  type = "text",
  id,
  label,
  className = "",
  value,
  onChange,
  error,
}) => {
  const placeHolders = {
    email: "you@example.com",
    password: "كلمة السر الخاصة بك",
    first_name: "اسمك الأول",
    last_name: "لقب العائلة",
    phone: "رقم الهاتف الخاص بك",
    confirm_password: "أعد إدخال كلمة السر",
  };
  const defaultClassName =
    "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1";
  let finalClassName = (defaultClassName + className).trim();
  let [view, setView] = useState(false);
  return (
    <div className={`${id.includes("password") ? "relative" : ""}`}>
      <label className="block" htmlFor={id}>
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
        {error && <span className="text-red-500 text-sm">{error}</span>}
        <input
          id={id}
          value={value}
          onChange={onChange}
          type={id.includes("password") ? (view ? "text" : "password") : type}
          name={id}
          className={finalClassName}
          placeholder={placeHolders[id]}
        />
      </label>
      {id.includes("password") ? (
        <button
          type="button"
          onClick={() => setView(!view)}
          className="absolute left-[10px] top-2/3 -translate-y-1/2 bg-transparent border-0 cursor-pointer"
        >
          {view ? <FiEyeOff /> : <FiEye />}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputField;
