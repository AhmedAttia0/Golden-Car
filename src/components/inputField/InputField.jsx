import React from "react";
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
    phone_number: "رقم الهاتف الخاص بك",
    confirm_password: "أعد إدخال كلمة السر",
  };
  const defaultClassName =
    "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1";
  let finalClassName = (defaultClassName + className).trim();
  return (
    <label className="block" htmlFor={id}>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        name={id}
        className={finalClassName}
        placeholder={placeHolders[id]}
      />
    </label>
  );
};

export default InputField;
