import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import {
  BarGraphData,
  GraphData,
  LineGraphData,
  PieGraphData,
  WidgetData,
} from "../../utils/types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

interface PieGraphWidgetProps {
  data: PieGraphData;
}

interface BarGraphWidgetProps {
  data: BarGraphData;
}

interface LineGraphWidgetProps {
  data: LineGraphData;
}

interface GraphWidgetProps {
  widget: WidgetData<GraphData>;
}

const GraphWidget: React.FC<GraphWidgetProps> = ({ widget }) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(
    (widget.data as GraphData).timeFilterOptions[0]
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

  if (widget.subType === "bar") {
    return (
      <section
        style={{
          backgroundColor: widget.bgColor,
        }}
        className="z-30 pt-5 pb-3 rounded-2xl shadow-card w-[15rem] h-[15rem]"
      >
        <BarGraphWidget data={widget.data as BarGraphData} />
      </section>
    );
  } else if (widget.subType === "line") {
    return (
      <section
        style={{
          backgroundColor: widget.bgColor,
        }}
        className="z-30 pt-5 pb-3 rounded-2xl shadow-card w-[15rem] h-[15rem]"
      >
        <LineGraphWidget data={widget.data as LineGraphData} />
      </section>
    );
  } else if (widget.subType === "pie") {
    return (
      <section
        style={{
          backgroundColor: widget.bgColor,
        }}
        className="z-30 pt-5 pb-3 rounded-2xl shadow-card w-[15rem] h-[15rem]"
      >
        <div className="flex border-b-[1px] border-[#E1E1E1]">
          {(widget.data as GraphData).timeFilterOptions.map((filter, i) => (
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
        <PieGraphWidget data={widget.data as PieGraphData} />
      </section>
    );
  }
  return null;
};

const PieGraphWidget: React.FC<PieGraphWidgetProps> = ({ data }) => {
  const chartData = data.orderCategories.map((category) => ({
    title: category.category,
    value: category.count,
    color: category.color,
  }));

  return (
    <div className="widget">
      {/* Donut Chart */}
      <div className="relative">
        <PieChart
          data={chartData}
          radius={60}
          animate
          lineWidth={30}
          paddingAngle={5}
          center={[85, 70]}
          viewBoxSize={[170, 140]}
          segmentsStyle={{ cursor: "pointer", borderRadius: "5px" }}
          rounded={false}
        />
        <div className="absolute top-[50%] items-center left-[50%] flex flex-col -translate-x-[50%] -translate-y-[50%]">
          <span className="text-[1.4rem] text-[#4F4F4F]">
            {data.totalOrders.toLocaleString()}
          </span>
          <span className="text-[0.7rem] text-[#BBBBBB]">Orders</span>
        </div>
      </div>
      {/* Central Label */}
    </div>
  );
};

const BarGraphWidget: React.FC<BarGraphWidgetProps> = ({ data }) => {
  return (
    <div className="widget">
      {/* Time Filter */}
      <div className="time-filter">
        {data.timeFilterOptions.map((filter) => (
          <button
            key={filter}
            className={`time-filter-button ${
              data.selectedTimeFilter === filter ? "selected" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Bar Graph */}
      {/* <div className="bar-graph">
        {data.datasets.map((dataset, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${(dataset.data[0] / data.maxValue) * 100}%`,
              backgroundColor: dataset.borderColor,
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

const LineGraphWidget: React.FC<LineGraphWidgetProps> = ({ data }) => {
  return (
    <div className="widget">
      {/* Time Filter */}
      <div className="time-filter">
        {data.timeFilterOptions.map((filter) => (
          <button
            key={filter}
            className={`time-filter-button ${
              data.selectedTimeFilter === filter ? "selected" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Line Graph */}
      {/* <div className="line-graph">
        {data.datasets.map((dataset, index) => (
          <div
            key={index}
            className="line"
            style={{
              height: `${(dataset.data[0] / data.maxValue) * 100}%`,
              backgroundColor: dataset.borderColor,
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default GraphWidget;
