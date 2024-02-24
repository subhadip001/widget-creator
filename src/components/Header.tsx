import React from "react";
import { FiHome } from "react-icons/fi";
import Tab from "./ui/Tab";
import Headericon from "./ui/Headericon";
import { IoSettingsOutline, IoAdd } from "react-icons/io5";
import { useModalStateStore, useTabStore } from "../store/appStore";
import Button from "./ui/Button";

const Header: React.FC = () => {
  const activeTab: string = useTabStore((state) => state.activeTab);
  const setActiveTab: (tab: string) => void = useTabStore(
    (state) => state.setActiveTab
  );
  const setModalState: (state: boolean) => void = useModalStateStore(
    (state) => state.setModalState
  );
  return (
    <div className="flex bg-[#ffff] justify-between items-center h-[9vh] px-4 md:px-8 border-b-2 border-gray_light">
      <section className="left flex gap-3 w-[60%] md:w-auto overflow-x-auto overflow-y-hidden md:overflow-x-visible">
        <div className="flex items-center">
          <FiHome className="text-xl text-gray_default" />
        </div>
        <Tab label="overview" active={activeTab === "overview"} />
        <Tab label="customers" active={activeTab === "customers"} />
        <Tab label="products" active={activeTab === "products"} />
        <Tab label="settings" active={activeTab === "settings"} />
        <Button
          className=" border-border_brand text-brand bg-[#5e5adb10]"
          type="button"
          onClick={() => {}}
        >
          <IoAdd className="text-xl" />
        </Button>
      </section>

      <section className="right flex items-center gap-3 md:gap-6">
        <Button
          className=" border-border_brand h-[40px] items-center text-brand bg-[#5e5adb10]"
          type="button"
          onClick={() => {
            setModalState(true);
            if (activeTab === "") {
              setActiveTab("customers");
            }
          }}
        >
          <div className="flex items-center text-sm gap-2">
            <div>
              <IoAdd className="text-2xl" />
            </div>
            <span className="hidden md:block font-medium">Add Widget</span>
          </div>
        </Button>
        <Headericon active={false} onClick={() => {}} className="active">
          <IoSettingsOutline className="text-2xl text-gray_default" />
        </Headericon>
      </section>
    </div>
  );
};

export default Header;
