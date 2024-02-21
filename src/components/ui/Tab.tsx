import React from "react";
import { TabProps } from "../../utils/types";
import { useTabStore } from "../../store/appStore";
import { IoAdd, IoAddOutline, IoAddSharp } from "react-icons/io5";

const Tab: React.FC<TabProps> = ({ active, label }) => {
  const activeTab: string = useTabStore((state) => state.activeTab);
  const setActiveTab: (tab: string) => void = useTabStore(
    (state) => state.setActiveTab
  );

  const activeTabClass = activeTab === label;

  return (
    <div
      className={`tab flex justify-center items-center gap-2 transition-all cursor-pointer capitalize border rounded-[0.7rem] px-4 h-[40px] ${
        activeTabClass
          ? "border-border_brand text-brand bg-[#F7F6FD]"
          : "border-border_light text-gray_default"
      }`}
      onClick={() => {
        if (activeTab !== label) {
          setActiveTab(label);
        } else {
          setActiveTab("");
        }
      }}
    >
      <div className="flex items-center">
        <span className="text-sm">{label}</span>
        {active ? <IoAdd className="rotate-45 text-2xl translate-x-1" /> : null}
      </div>
    </div>
  );
};

export default Tab;
