import React from "react";
import DataWidget from "./widgets/DataWidget";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GraphData, SummaryData, TableData, WidgetData } from "../utils/types";
import SummaryWidget from "./widgets/SummaryWidget";
import GraphWidget from "./widgets/GraphWidget";

const Dashboard: React.FC = () => {
  const { widgets } = useLocalStorage();
  return (
    <div className="px-4 md:px-8 bg-brand_light">
      <section className="h-[87vh] my-2 overflow-y-auto">
        <div className="flex gap-4 my-3 mx-2">
          {widgets.map((widget, index) => {
            if (widget.type === "data") {
              return <DataWidget key={index} widget={widget as WidgetData<TableData>} />;
            } else if (widget.type === "summary") {
              return (
                <SummaryWidget key={index} widget={widget as WidgetData<SummaryData>} />
              );
            } else if (widget.type === "graph") {
              return (
                <GraphWidget
                  key={index}
                  widget={widget as WidgetData<GraphData>}
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
