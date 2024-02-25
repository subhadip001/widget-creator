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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface BarGraphWidgetProps {
  textColor: string;
  data: BarGraphData;
}

interface LineGraphWidgetProps {
  textColor: string;
  data: LineGraphData;
}

interface PieGraphWidgetProps {
  textColor: string;
  data: PieGraphData;
}

interface GraphWidgetProps {
  widget: WidgetData<GraphData>;
}

/**
 * Renders a graph widget with different subtypes (bar, line, pie)
 * @component
 * @description
 *   - Uses state variable to track selected time filter
 *   - Renders different graph widgets based on subtype and data provided
 *   - Handles styling and active filter logic
 *   - Uses useState hook for selectedTimeFilter
 */
const GraphWidget: React.FC<GraphWidgetProps> = ({ widget }) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(
    (widget.data as GraphData).timeFilterOptions[0]
  );
  let activeFilterClass = "";
  let activeFilterBorderColor = "";
  let textColor = "";

  if (widget.bgColor === "#ffff") {
    activeFilterClass = "text-[#5E5ADB]";
    activeFilterBorderColor = "#5E5ADB";
    textColor = "#5E5ADB";
  } else if (widget.bgColor === "#5E5ADB") {
    activeFilterClass = "text-[#ffff]";
    activeFilterBorderColor = "#ffff";
    textColor = "#ffff";
  } else if (widget.bgColor === "#282828") {
    activeFilterClass = "text-[#ffff]";
    activeFilterBorderColor = "#ffff";
    textColor = "#ffff";
  }

  if (widget.subType === "bar") {
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
        <BarGraphWidget
          textColor={textColor}
          data={widget.data as BarGraphData}
        />
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
        <LineGraphWidget
          textColor={textColor}
          data={widget.data as LineGraphData}
        />
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
        <PieGraphWidget
          textColor={textColor}
          data={widget.data as PieGraphData}
        />
      </section>
    );
  }
  return null;
};

/**
 * A pie chart widget that displays the total number of orders and their respective categories.
 * @component
 * @prop {string} textColor - The color of the total orders text.
 * @prop {object} data - An object containing the order categories and their respective counts and colors.
 * @description
 *   - The widget uses the react-minimal-pie-chart library to render the pie chart.
 *   - The chartData variable is created by mapping through the orderCategories data and formatting it to fit the library's data structure.
 *   - The widget also displays the total number of orders in the center of the chart.
 *   - The total number of orders is formatted using the toLocaleString() method.
 */
const PieGraphWidget: React.FC<PieGraphWidgetProps> = ({ textColor, data }) => {
  const chartData = data.orderCategories.map((category) => ({
    title: category.category,
    value: category.count,
    color: category.color,
  }));

  return (
    <div className="widget">
      <div className="relative">
        <PieChart
          data={chartData}
          radius={60}
          animate
          lineWidth={30}
          paddingAngle={5}
          center={[85, 70]}
          totalValue={data.totalOrders}
          viewBoxSize={[170, 140]}
          segmentsStyle={{ cursor: "pointer", borderRadius: "5px" }}
          rounded={false}
        />
        <div className="absolute top-[50%] items-center left-[50%] flex flex-col -translate-x-[50%] -translate-y-[50%]">
          <span
            style={{
              color: textColor,
            }}
            className={`text-[1.4rem]`}
          >
            {data.totalOrders.toLocaleString()}
          </span>
          <span className="text-[0.7rem] text-[#BBBBBB]">Orders</span>
        </div>
      </div>
    </div>
  );
};

const formatYAxisTick = (tick: number) => {
  return tick === 0 ? "0" : `${Math.round(tick / 1000)}K`;
};

/**
 * A bar chart widget that displays data in a visually appealing way.
 * @component
 * @prop {string} textColor - The color of the tick labels on the Y axis.
 * @prop {object} data - The data to be displayed on the chart.
 * @description
 *   - The chart uses a responsive container to adjust to different screen sizes.
 *   - The Y axis tick labels are formatted using the provided function.
 *   - The chart uses a custom tooltip to display data values.
 *   - The bars are colored based on the category they represent.
 */
const BarGraphWidget: React.FC<BarGraphWidgetProps> = ({ textColor, data }) => {
  return (
    <div className="widget flex justify-center items-center w-[14rem] h-[12rem]">
      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={data.data.categories}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid vertical={false} stroke="#F4F4F4" />
          <XAxis hide />
          <YAxis
            tickFormatter={formatYAxisTick}
            domain={[0, "dataMax + 10000"]}
            tick={{
              fill: textColor,
              fontSize: 11,
              strokeWidth: 0,
              stroke: "none",
              opacity: 0.7,
            }}
            axisLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" radius={[10, 10, 10, 10]}>
            {data.data.categories.map((entry, index) => (
              <Cell key={`cell-${index}`} width={10} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * A responsive line chart component that displays data points over time.
 * @component
 * @prop {string} textColor - The color of the text on the chart.
 * @prop {object} data - An object containing the data series and their corresponding data points.
 * @description
 *   - The chartData variable is created by mapping over the data series and combining their data points into one array.
 *   - The chartData is then used as the data prop for the LineChart component.
 *   - The YAxis component uses a custom tick formatter function and a domain that adds 10,000 to the maximum data value.
 *   - The Line components are dynamically rendered based on the data series provided.
 */
const LineGraphWidget: React.FC<LineGraphWidgetProps> = ({
  textColor,
  data,
}) => {
  type ChartDataPoint = {
    time: string;
    [key: string]: string | number; // This index signature allows for any string key to be used
  };

  const chartData: ChartDataPoint[] = data.dataSeries[0].dataPoints.map(
    (_, index) => {
      return data.dataSeries.reduce<ChartDataPoint>(
        (acc, series) => {
          acc[series.name] = series.dataPoints[index].value;
          return acc;
        },
        { time: data.dataSeries[0].dataPoints[index].time }
      );
    }
  );
  return (
    <div className="widget flex justify-center items-center w-[14rem] h-[12rem]">
      <ResponsiveContainer width="100%" height={160}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        >
          <CartesianGrid horizontal={false} stroke="#F4F4F4" />
          <XAxis hide />
          <YAxis
            tickFormatter={formatYAxisTick}
            domain={[0, "dataMax + 10000"]}
            tick={{
              fill: textColor,
              fontSize: 11,
              strokeWidth: 0,
              stroke: "none",
              opacity: 0.7,
            }}
            axisLine={false}
          />
          <Tooltip />
          {data.dataSeries.map((series) => (
            <Line
              key={series.name}
              type="linear"
              dataKey={series.name}
              stroke={series.color}
              dot={false}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphWidget;
