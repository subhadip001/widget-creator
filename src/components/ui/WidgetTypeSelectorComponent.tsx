import React from "react";
import { WidgetTypeSelectorComponentProps } from "../../utils/types";
import { useNewWidget } from "../../store/appStore";
import barIcon from "../../assets/bar_icon.svg";
import lineIcon from "../../assets/line_icon.svg";
import pieIcon from "../../assets/pie_icon.svg";

const WidgetTypeSelectorComponent: React.FC<
  WidgetTypeSelectorComponentProps
> = ({ title, description, widgetType }) => {
  const newWidget = useNewWidget((state) => state.newWidget);
  const setNewWidget = useNewWidget((state) => state.setNewWidget);
  console.log(newWidget.subType);
  return (
    <div
      className={`w-full text-start px-3 py-2 rounded-md border-2 ${
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
          });
          return;
        }
        setNewWidget({
          ...newWidget,
          type: widgetType,
          subType: undefined,
        });
      }}
    >
      <span className="text-base">{title}</span>
      <span className="text-[#888891] block text-xs">{description}</span>
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
                });
                return;
              }
              setNewWidget({
                ...newWidget,
                subType: "bar",
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
                });
                return;
              }
              setNewWidget({
                ...newWidget,
                subType: "line",
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
                });
                return;
              }
              setNewWidget({
                ...newWidget,
                subType: "pie",
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
