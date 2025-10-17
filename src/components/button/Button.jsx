import React from "react";
/* A generic template for a button, you can use it's default shape or
you can customize its appearance through the className props, you also give it children, 
an onClick function, a type (if it's for a form) and you specify if it's disabled
or not*/
const Button = ({
  disabled = false,
  onClick = () => {},
  type = "",
  className = "",
  children,
}) => {
  const defaultClass = "bg-[#5937E0] text-white px-4 py-2 rounded";
  const combinedClass = `${defaultClass} ${className}`.trim();
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type != "" ? type : undefined}
      className={combinedClass}
    >
      {children}
    </button>
  );
};

export default Button;
