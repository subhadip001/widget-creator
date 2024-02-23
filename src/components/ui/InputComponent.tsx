import React from "react";
import { InputComponentProps } from "../../utils/types";

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={
        className +
        " px-2 py-1 border-2 border-[#CBD5E1] text-[#898989] rounded-md text-[14px] outline-none"
      }
    />
  );
};

export default InputComponent;
