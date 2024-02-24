import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TableData, WidgetData } from "../../utils/types";

interface DataWidgetProps {
  widget: WidgetData<TableData>;
}

const DataWidget: React.FC<DataWidgetProps> = ({ widget }) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(
    (widget.data as TableData).timeFilter[0]
  );

  let activeFilterClass = "";
  let activeFilterBorderColor = "";
  let theadClass = "";
  let tFootClass = "";

  if (widget.bgColor === "#ffff") {
    activeFilterClass = "text-[#5E5ADB]";
    activeFilterBorderColor = "#5E5ADB";
    theadClass = "text-[#5E5ADB]";
    tFootClass = "text-[#474747]";
  } else if (widget.bgColor === "#5E5ADB") {
    activeFilterClass = "text-[#ffff]";
    activeFilterBorderColor = "#ffff";
    theadClass = "text-[#ffff]";
    tFootClass = "text-[#ffff]";
  } else if (widget.bgColor === "#282828") {
    activeFilterClass = "text-[#ffff]";
    activeFilterBorderColor = "#ffff";
    theadClass = "text-[#ffff]";
    tFootClass = "text-[#ffff]";
  }

  return (
    <section
      style={{
        backgroundColor: widget.bgColor,
      }}
      className="z-30 pt-5 pb-3 rounded-2xl shadow-card w-[15rem] h-[15rem]"
    >
      <div className="flex border-b-[1px] border-[#E1E1E1]">
        {(widget.data as TableData).timeFilter.map((filter, i) => (
          <div
            key={filter}
            onClick={() => setSelectedTimeFilter(filter)}
            className={`px-3 py-[1px] cursor-pointer ${
              i === 0 ? "pl-5" : ""
            } text-xs ${
              selectedTimeFilter === filter
                ? activeFilterClass + " filter-active font-semibold"
                : "text-[#BBBBBB]"
            }`}
            style={
              selectedTimeFilter === filter
                ? ({
                    "--border-color": activeFilterBorderColor,
                  } as React.CSSProperties)
                : {}
            }
          >
            {filter}
          </div>
        ))}
        <div className="ml-auto px-2 mr-2 cursor-pointer text-[#BBBBBB]">
          <HiOutlineDotsHorizontal className="translate-y-[0.1rem] text-[#D9D9D9] " />
        </div>
      </div>
      <div className="mt-2 py-3 px-5">
        <table className="min-w-full">
          <thead>
            <tr className="">
              {(widget.data as TableData).columns.map((column, i) => (
                <th
                  key={column.id}
                  className={`text-xs pb-1 font-bold uppercase ${
                    i === 0
                      ? theadClass + " text-start"
                      : theadClass + " text-center opacity-65"
                  } ${i !== 0 ? "border-l border-[#F6F6F6]" : ""}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(widget.data as TableData).rows.map((row, index) => (
              <tr key={index}>
                {(widget.data as TableData).columns.map((column, i) => (
                  <td
                    key={column.id}
                    className={`text-xs py-[1px] ${
                      i === 0 ? " text-start" : " text-center"
                    } ${
                      index === (widget.data as TableData).rows.length - 1
                        ? tFootClass + " font-bold pt-[6px]"
                        : tFootClass + " opacity-65"
                    } ${i !== 0 ? "border-l border-[#F6F6F6]" : ""}`}
                  >
                    {row[column.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataWidget;
