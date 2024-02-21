import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { BarGraphData, LineGraphData, PieGraphData } from "../../utils/types";

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
  subType: "bar" | "line" | "pie" | undefined;
  data: BarGraphData | LineGraphData | PieGraphData;
}

const GraphWidget: React.FC<GraphWidgetProps> = ({ subType, data }) => {
  if (subType === "bar") {
    return <BarGraphWidget data={data as BarGraphData} />;
  } else if (subType === "line") {
    return <LineGraphWidget data={data as LineGraphData} />;
  } else if (subType === "pie") {
    return <PieGraphWidget data={data as PieGraphData} />;
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

      {/* Donut Chart */}
      <div className="relative">
        <PieChart
          data={chartData}
          radius={20}
          animate
          lineWidth={30}
          paddingAngle={5}
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <strong>{data.totalOrders.toLocaleString()}</strong> Orders
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
