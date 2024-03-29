import React, { useEffect } from "react";
import DataWidget from "./widgets/DataWidget";
import { GraphData, SummaryData, TableData, WidgetData } from "../utils/types";
import SummaryWidget from "./widgets/SummaryWidget";
import GraphWidget from "./widgets/GraphWidget";
import { useTabStore, useWidgetStore } from "../store/appStore";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Renders a section of widgets based on the active tab and available widgets.
 * @component
 * @prop {array} widgets - An array of widget objects.
 * @prop {string} activeTab - The currently active tab.
 * @description
 *   - Uses the useWidgetStore and useTabStore hooks to access the widgets and activeTab state variables.
 *   - Uses the fetchWidgets function from the useLocalStorage hook to fetch widgets on component mount.
 *   - Checks if there are any widgets available and renders a message if not.
 *   - Checks if the active tab has any widgets available and renders a message if not.
 */
const Dashboard: React.FC = () => {
  const widgets = useWidgetStore((state) => state.widgets);
  const activeTab = useTabStore((state) => state.activeTab);

  const { fetchWidgets } = useLocalStorage();

  useEffect(() => {
    fetchWidgets();
  }, []);

  console.log(widgets);

  if (widgets.length === 0) {
    return (
      <div className="h-[87vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-[#5e5adbb8]">
          No widgets available
        </h1>
      </div>
    );
  }

  const availableCategories = widgets.map((widget) => widget.category);

  if (!availableCategories.includes(activeTab)) {
    return (
      <div className="h-[87vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-[#5e5adbb8]">
          No widgets available for this category
        </h1>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 bg-brand_light">
      <section className="h-[87vh] pb-24 pt-3 md:px-4 md:pb-0 my-5 flex gap-y-3 flex-wrap gap-6 overflow-y-auto justify-center md:justify-normal">
        {widgets.length !== 0
          ? widgets.map((widget, index) => {
              if (widget.type === "data" && widget.category === activeTab) {
                return (
                  <DataWidget
                    key={index}
                    widget={widget as WidgetData<TableData>}
                  />
                );
              } else if (
                widget.type === "summary" &&
                widget.category === activeTab
              ) {
                return (
                  <SummaryWidget
                    key={index}
                    widget={widget as WidgetData<SummaryData>}
                  />
                );
              } else if (
                widget.type === "graph" &&
                widget.category === activeTab
              ) {
                return (
                  <GraphWidget
                    key={index}
                    widget={widget as WidgetData<GraphData>}
                  />
                );
              } else {
                return null;
              }
            })
          : null}
      </section>
    </div>
  );
};

export default Dashboard;
