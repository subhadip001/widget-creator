import React from "react";
import { WidgetTypeSelectorComponentProps } from "../../utils/types";

const WidgetTypeSelectorComponent: React.FC<
  WidgetTypeSelectorComponentProps
> = ({ title, description, widgetType }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{widgetType}</p>
    </div>
  );
};

export default WidgetTypeSelectorComponent;
