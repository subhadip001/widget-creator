import React from "react";
import { TabProps } from "../../utils/types";

const Tab: React.FC<TabProps> = ({ active, label, onClick, setActiveTab }) => {
  return (
    <div className={`tab cursor-pointer ${active ? "active" : ""}`} onClick={onClick}>
      {label}
      {active && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("close tab");
            setActiveTab("");
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Tab;
