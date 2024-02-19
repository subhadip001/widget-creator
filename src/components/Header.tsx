import React from "react";
import { FiHome } from "react-icons/fi";
import Tab from "./ui/Tab";
import Headericon from "./ui/Headericon";
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useTabStore } from "../store/appStore";

const Header: React.FC = () => {
  const activeTab: string = useTabStore((state) => state.activeTab);
  const setActiveTab: (tab: string) => void = useTabStore(
    (state) => state.setActiveTab
  );
  return (
    <div className="flex justify-between items-center py-4 px-5">
      <section className="left flex">
        <Headericon active={false} onClick={() => {}} className="active">
          <FiHome className="text-3xl text-gray_default" />
        </Headericon>
        <Tab
          label="Overview"
          active={activeTab === "overview"}
          onClick={() => {
            if (activeTab !== "overview") {
              setActiveTab("overview");
            } else {
              setActiveTab("");
            }
          }}
          setActiveTab={() => {}}
        />
        <Tab
          label="Customers"
          active={activeTab === "customers"}
          onClick={() => {
            if (activeTab !== "customers") {
              setActiveTab("customers");
            } else {
              setActiveTab("");
            }
          }}
          setActiveTab={() => {}}
        />
        <Tab
          label="Products"
          active={activeTab === "products"}
          onClick={() => {
            if (activeTab !== "products") {
              setActiveTab("products");
            } else {
              setActiveTab("");
            }
          }}
          setActiveTab={() => {}}
        />
      </section>
      <section className="right flex">
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
