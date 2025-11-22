import React from "react";
/* this is a generic template for an input field (just text fields), you can take its default style
or modify it through className, you should give it an id for naming, a label, and you may
change its type from text*/
const InputField = ({ type = "text", id, label, className = "" }) => {
  const placeHolders = {
    email: "you@example.com",
    password: "كلمة السر الخاصة بك",
  };
  const defaultClassName =
    "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1";
  let finalClassName = (defaultClassName + className).trim();
  return (
    <label className="block" htmlFor={id}>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        id={id}
        type={type}
        name={id}
        className={finalClassName}
        placeholder={placeHolders[id]}
      />
    </label>
  );
};

export default InputField;
