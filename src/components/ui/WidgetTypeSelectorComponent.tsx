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
        newWidget.type === widgetType ? "border-brand" : "border-border_light"
      }`}
      onClick={() => {
        setNewWidget({
          ...newWidget,
          type: widgetType,
          subType: "bar",
        });
      }}
    >
      <span className="text-base">{title}</span>
      <span className="text-[#888891] block text-xs">{description}</span>
      {widgetType === "graph" ? (
        <div className="grid grid-cols-3 w-full z-20 md:w-[50%] bg-[#F4F4F5]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setNewWidget({
                ...newWidget,
                subType: "bar",
              });
            }}
            className={`${
              newWidget.subType === "bar" ? "bg-[#ffff]" : "bg-transparent"
            }`}
            type="button"
          >
            <img className="w-[14px] h-[14px]" src={barIcon} alt="bar" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setNewWidget({
                ...newWidget,
                subType: "line",
              });
            }}
            className={`${
              newWidget.subType === "line" ? "bg-[#ffff]" : "bg-transparent"
            }`}
            type="button"
          >
            <img className="w-[14px] h-[14px]" src={lineIcon} alt="line" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setNewWidget({
                ...newWidget,
                subType: "pie",
              });
            }}
            className={`${
              newWidget.subType === "pie" ? "bg-[#ffff]" : "bg-transparent"
            }`}
            type="button"
          >
            <img className="w-[14px] h-[14px]" src={pieIcon} alt="pie" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WidgetTypeSelectorComponent;
