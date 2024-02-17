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
      className={className}
    />
  );
};

export default InputComponent;
