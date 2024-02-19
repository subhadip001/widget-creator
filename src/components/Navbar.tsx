import React from "react";
import logo from "../assets/logo.jpeg";
import { GoPulse } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiStack } from "react-icons/pi";
import { HiChartBar } from "react-icons/hi2";
import Navicon from "./ui/Navicon";

type NavbarProps = {
  className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`${className} items-center`}>
      <div className="w-[50px] h-[50px] block rounded-2xl">
        <img
          src={logo}
          className="h-full w-full object-cover rounded-2xl"
          alt="crux_logo"
        />
      </div>
      <nav className="flex w-[80%] md:w-auto md:flex-col items-center justify-between md:gap-5">
        <Navicon active={false} className="active" onClick={() => {}}>
          <GoPulse className="text-3xl text-gray_default" />
        </Navicon>
        <Navicon active={false} className="active" onClick={() => {}}>
          <HiOutlineChatBubbleLeftRight className="text-3xl text-gray_default" />
        </Navicon>
        <Navicon active={false} className="active" onClick={() => {}}>
          <PiStack className="text-3xl text-gray_default" />
        </Navicon>
        <Navicon active={true} className="active" onClick={() => {}}>
          <div className="rounded-md p-1 border-[3px] border-gray_default">
            <HiChartBar className="text-xl text-gray_default" />
          </div>
        </Navicon>
      </nav>
    </div>
  );
};

export default Navbar;
