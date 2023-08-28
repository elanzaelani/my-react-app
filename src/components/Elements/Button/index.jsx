import React from "react";

const Button = (props) => {
  const { variant = "bg-black", children, onClick ,type="button"} = props;
  return (
    <div>
      <button
        className={`h-10 w-40 ${variant} font-semibold text-white rounded-md`}
        type={type}
        onClick={()=> {
          {onClick}
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
