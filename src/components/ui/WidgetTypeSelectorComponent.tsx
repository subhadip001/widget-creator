import React from "react";
import { WidgetTypeSelectorComponentProps } from "../../utils/types";
import { useNewWidget } from "../../store/appStore";

const WidgetTypeSelectorComponent: React.FC<
  WidgetTypeSelectorComponentProps
> = ({ title, description, widgetType, widgetSubType }) => {
  const newWidget = useNewWidget((state) => state.newWidget);
  const setNewWidget = useNewWidget((state) => state.setNewWidget);
  console.log(newWidget);
  return (
    <button
      className={`w-full text-start px-3 py-2 rounded-md border-2 ${
        (newWidget as { type: string }).type === widgetType ? "border-brand" : "border-border_light"
      }`}
      type="button"
      onClick={() => {
        setNewWidget({
          ...newWidget,
          type: widgetType,
          subType: widgetSubType,
        });
      }}
    >
      <span className="text-base">{title}</span>
      <span className="text-[#888891] block text-xs">{description}</span>
    </button>
  );
};

export default WidgetTypeSelectorComponent;
