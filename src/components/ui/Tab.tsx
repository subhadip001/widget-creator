import React from "react";
import { TabProps } from "../../utils/types";
import { useTabStore } from "../../store/appStore";
import { IoAdd } from "react-icons/io5";

const Tab: React.FC<TabProps> = ({ active, label }) => {
  const activeTab: string = useTabStore((state) => state.activeTab);
  const setActiveTab: (tab: string) => void = useTabStore(
    (state) => state.setActiveTab
  );

  const activeTabClass = activeTab === label;

  return (
    <div
      className={`tab flex justify-center gap-2 items-center transition-all cursor-pointer capitalize border rounded-[0.7rem] px-3 h-[7vh] ${
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
      <span className="text-2xl">{label}</span>
      {active ? (
        <div>
          <IoAdd className="text-3xl rotate-45 mt-1 translate-x-1" />
        </div>
      ) : null}
    </div>
  );
};

export default Tab;
