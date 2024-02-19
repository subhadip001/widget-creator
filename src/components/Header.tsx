import React from "react";
import { FiHome } from "react-icons/fi";
import Tab from "./ui/Tab";
import Headericon from "./ui/Headericon";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useTabStore } from "../store/appStore";

const Header: React.FC = () => {
  const activeTab: string = useTabStore((state) => state.activeTab);
  return (
    <div className="flex justify-between items-center py-4 px-5 border-b-2 border-gray_light">
      <section className="left flex gap-3 w-[60%] md:w-auto overflow-x-auto overflow-y-hidden md:overflow-x-visible">
        <Headericon active={false} onClick={() => {}} className="active">
          <FiHome className="text-3xl text-gray_default" />
        </Headericon>
        <Tab label="overview" active={activeTab === "overview"} />
        <Tab label="customers" active={activeTab === "customers"} />
        <Tab label="products" active={activeTab === "products"} />
        <Tab label="settings" active={activeTab === "settings"} />
      </section>
      <section className="right flex items-center gap-3">
        <Headericon active={false} onClick={() => {}} className="active">
          <IoMdAdd className="text-3xl text-gray_default" />
        </Headericon>
        <Headericon active={false} onClick={() => {}} className="active">
          <IoSettingsOutline className="text-3xl text-gray_default" />
        </Headericon>
      </section>
    </div>
  );
};

export default Header;
