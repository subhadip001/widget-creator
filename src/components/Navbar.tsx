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

/**
 * Component for displaying a navigation bar with icons and user profile picture.
 * @component
 * @prop {string} className - The class name for styling the component.
 * @description
 *   - Renders a navigation bar with icons and user profile picture.
 *   - Accepts a className prop for custom styling.
 *   - Uses React Hooks for managing state.
 *   - Uses third-party icons from React Icons library.
 */
const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`${className} items-center`}>
      <div className="w-[45px] h-[45px] aspect-square block rounded-2xl">
        <img
          src={logo}
          className="h-full w-full object-cover rounded-2xl"
          alt="crux_logo"
          draggable={false}
        />
      </div>
      <nav className="flex w-[80%] md:w-auto md:flex-col items-center justify-center md:justify-between gap-1 sm:gap-5 md:gap-5">
        <Navicon active={false} className="active" onClick={() => {}}>
          <GoPulse className="text-xl md:text-2xl text-gray_default" />
        </Navicon>
        <Navicon active={false} className="active" onClick={() => {}}>
          <HiOutlineChatBubbleLeftRight className="text-xl md:text-2xl text-gray_default" />
        </Navicon>
        <Navicon active={false} className="active" onClick={() => {}}>
          <PiStack className="text-xl md:text-2xl text-gray_default" />
        </Navicon>
        <Navicon active={true} className="active" onClick={() => {}}>
          <div className="rounded-md p-[0.1rem] md:p-1 border-[3px] border-gray_default">
            <HiChartBar className="md:text-[0.9rem] text-gray_default" />
          </div>
        </Navicon>
      </nav>
      <div className="w-[45px] h-[45px] aspect-square block rounded-full md:mt-auto">
        <img
          className="rounded-full h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f"
          alt="pp"
        />
      </div>
    </div>
  );
};

export default Navbar;
