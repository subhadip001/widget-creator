import React from "react";
import {
  BarGraphData,
  LineGraphData,
  PieGraphData,
  WidgetTypeSelectorComponentProps,
} from "../../utils/types";
import { useNewWidget } from "../../store/appStore";
import barIcon from "../../assets/bar_icon.svg";
import lineIcon from "../../assets/line_icon.svg";
import pieIcon from "../../assets/pie_icon.svg";
import { sampleSummaryData, sampleTableData } from "../../store/sampleData";
import {
  getSampleBarGraphData,
  getSampleLineGraphData,
  getSamplePieGraphData,
} from "../../utils/randomDataGen";

/**
 * Component for displaying a widget with customizable title, description, and widget type.
 * @component
 * @prop {string} title - The title of the widget.
 * @prop {string} description - The description of the widget.
 * @prop {string} widgetType - The type of widget to be displayed (e.g. graph, summary, table).
 * @description
 *   - Uses state variables to track the current widget being displayed and its properties.
 *   - Renders a customizable widget with a title, description, and widget type.
 *   - Allows for selection of different graph subtypes (bar, line, pie) for the graph widget type.
 *   - Uses sample data for each widget type to display as an example.
 */

const WidgetTypeSelectorComponent: React.FC<
  WidgetTypeSelectorComponentProps
> = ({ title, description, widgetType }) => {
  const newWidget = useNewWidget((state) => state.newWidget);
  const setNewWidget = useNewWidget((state) => state.setNewWidget);

  const sampleBarGraphData: BarGraphData = getSampleBarGraphData();
  const sampleLineGraphData: LineGraphData = getSampleLineGraphData();
  const samplePieGraphData: PieGraphData = getSamplePieGraphData();

  return (
    <div
      className={`w-full text-start md:px-4 px-3 py-1 md:py-[1.1rem] rounded-md border-2 cursor-pointer ${
        newWidget.type === widgetType
          ? "border-brand shadow-md"
          : "border-border_light"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        if (widgetType === "graph") {
          setNewWidget({
            ...newWidget,
            type: widgetType,
            subType: "bar",
            data: sampleBarGraphData,
          });
          return;
        }
        setNewWidget({
          ...newWidget,
          type: widgetType,
          subType: undefined,
          data: widgetType === "summary" ? sampleSummaryData : sampleTableData,
        });
      }}
    >
      <span className="md:text-base text-xs text-[#585858]">{title}</span>
      <span className="text-[#888891] block md:text-xs text-[10px]">
        {description}
      </span>
      {widgetType === "graph" ? (
        <div className="grid grid-cols-3 w-full md:w-[50%] bg-[#F4F4F5] py-1 px-1 gap-1 rounded-lg">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (newWidget.type !== "graph") {
                setNewWidget({
                  ...newWidget,
                  type: widgetType,
                  subType: "bar",
                  data: sampleBarGraphData,
                });
                return;
              }
              setNewWidget({
                ...newWidget,
                subType: "bar",
                data: sampleBarGraphData,
              });
            }}
            className={`${
              newWidget.subType === "bar"
                ? "bg-[#ffff] rounded-md shadow-md"
                : "bg-transparent"
            } flex item-center justify-center py-[6px]`}
            type="button"
          >
            <img className="w-[15px] h-[15px]" src={barIcon} alt="bar" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (newWidget.type !== "graph") {
                setNewWidget({
                  ...newWidget,
                  type: widgetType,
                  subType: "line",
                  data: sampleLineGraphData,
                });
                return;
              }
              setNewWidget({
                ...newWidget,
                subType: "line",
                data: sampleLineGraphData,
              });
            }}
            className={`${
              newWidget.subType === "line"
                ? "bg-[#ffff] rounded-md shadow-md"
                : "bg-transparent"
            } flex item-center justify-center py-[6px]`}
            type="button"
          >
            <img className="w-[15px] h-[15px]" src={lineIcon} alt="line" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (newWidget.type !== "graph") {
                setNewWidget({
                  ...newWidget,
                  type: widgetType,
                  subType: "pie",
                  data: samplePieGraphData,
                });
                return;
              }
              setNewWidget({
                ...newWidget,
                subType: "pie",
                data: samplePieGraphData,
              });
            }}
            className={`${
              newWidget.subType === "pie"
                ? "bg-[#ffff] rounded-md shadow-md"
                : "bg-transparent"
            } flex items-center justify-center py-[6px]`}
            type="button"
          >
            <img className="w-[15px] h-[15px]" src={pieIcon} alt="pie" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WidgetTypeSelectorComponent;
