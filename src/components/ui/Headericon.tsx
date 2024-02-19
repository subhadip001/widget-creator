import React from "react";
import { HeadericonProps } from "../../utils/types";

const Headericon: React.FC<HeadericonProps> = ({
  children,
  active,
  className,
  onClick,
}) => {
  const navClass = active
    ? " p-1 rounded-md bg-brand_light cursor-pointer"
    : " p-1 rounded-md cursor-pointer hover:bg-brand_light hover:text-brand_dark";
  return <div className={className + navClass}>{children}</div>;
};

export default Headericon;
