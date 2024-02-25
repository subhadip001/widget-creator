import React from "react";
import { SummaryData, WidgetData } from "../../utils/types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

interface SummaryWidgetProps {
  widget: WidgetData<SummaryData>;
}

/**
 * Displays a widget with customizable background color, time period, and summary text.
 * @component
 * @prop {object} widget - An object containing the time period and summary text for the widget.
 * @description
 *   - The widget's background color and text color will change depending on the bgColor prop.
 *   - The time period and summary text can be customized through the data prop.
 *   - The widget has a dropdown menu for changing the time period.
 *   - The widget also has a menu for additional options.
 */
const SummaryWidget: React.FC<SummaryWidgetProps> = ({ widget }) => {
  let textColor = "";
  let headColor = "";
  if (widget.bgColor === "#ffff") {
    textColor = "rgba(0, 0, 0, 0.7)";
    headColor = "#5E5ADB";
  } else {
    textColor = "#ffff";
    headColor = "#ffff";
  }

  return (
    <section
      style={{
        backgroundColor: widget.bgColor,
      }}
      className="z-30 pt-5 pb-3 rounded-2xl shadow-card w-[15rem] h-[15rem]"
    >
      <div className="flex border-b-[1px] px-4 border-[#E1E1E1]">
        <div
          style={{
            color: headColor,
          }}
          className="text-xs py-[1px] font-bold flex gap-1 items-center cursor-pointer"
        >
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
        <p
          style={{
            color: textColor,
          }}
          className="opacity-65 text-xs"
        >
          {widget.data.summaryText}
        </p>
      </div>
    </section>
  );
};

export default SummaryWidget;
