import React from "react";
import { NaviconProps } from "../../utils/types";

const Navicon: React.FC<NaviconProps> = ({
  children,
  active,
  className,
  //onClick,
}) => {
  const navClass = active
    ? " p-4 rounded-md bg-brand_light cursor-pointer"
    : " p-4 rounded-md cursor-pointer hover:bg-brand_light hover:text-brand_dark";
  return <div className={className + navClass}>{children}</div>;
};

export default Navicon;
