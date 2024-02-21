import React from "react";
import DataWidget from "./widgets/DataWidget";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GraphData, SummaryData, TableData } from "../utils/types";
import SummaryWidget from "./widgets/SummaryWidget";
import GraphWidget from "./widgets/GraphWidget";

const Dashboard: React.FC = () => {
  const { widgets } = useLocalStorage();
  return (
    <div className="px-4 md:px-8 bg-brand_light">
      <section className="h-[87vh] my-5 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {widgets.map((widget, index) => {
            if (widget.type === "data") {
              return <DataWidget key={index} data={widget.data as TableData} />;
            } else if (widget.type === "summary") {
              return (
                <SummaryWidget key={index} data={widget.data as SummaryData} />
              );
            } else if (widget.type === "graph") {
              return (
                <GraphWidget
                  key={index}
                  subType={widget.subType}
                  data={widget.data as GraphData}
                />
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
