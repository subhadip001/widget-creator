import React from "react";
import { HeadericonProps } from "../../utils/types";

const Headericon: React.FC<HeadericonProps> = ({
  children,
  active,
  className,
  //onClick,
}) => {
  const navClass = active
    ? " rounded-md bg-brand_light cursor-pointer flex items-center justify-center"
    : " rounded-md cursor-pointer flex items-center justify-center";
  return <div className={className + navClass}>{children}</div>;
};

export default Headericon;
