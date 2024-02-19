import React from "react";
import { ButtonProps } from "../../utils/types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={className + " rounded-[0.6rem] px-2 border-2 cursor-pointer"}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
