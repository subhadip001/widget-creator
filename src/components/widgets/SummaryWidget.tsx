import React from "react";
import { SummaryData, WidgetData } from "../../utils/types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

// The component props type uses the SummaryWidgetData interface
interface SummaryWidgetProps {
  widget: WidgetData<SummaryData>;
}

const SummaryWidget: React.FC<SummaryWidgetProps> = ({ widget }) => {
  // Render the summary widget using the data provided in the props
  return (
    <section
      style={{
        backgroundColor: widget.bgColor,
      }}
      className="z-30 pt-5 pb-3 rounded-2xl shadow-card w-[15rem] h-[15rem]"
    >
      <div className="flex border-b-[1px] px-4 border-[#E1E1E1]">
        <div className="text-xs py-[1px] text-[#B5B5B5] flex gap-1 items-center cursor-pointer">
          <span>{widget.data.timePeriod}</span>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="ml-auto cursor-pointer text-[#BBBBBB]">
          <HiOutlineDotsHorizontal className="translate-y-[0.1rem] text-[#D9D9D9] " />
        </div>
      </div>
      <div className="px-4 h-[13rem] py-3 overflow-auto">
        <p className="opacity-65 text-xs">{widget.data.summaryText}</p>
      </div>
    </section>
  );
};

export default SummaryWidget;
