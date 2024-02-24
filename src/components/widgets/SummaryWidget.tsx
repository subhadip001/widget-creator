import React from "react";
import { SummaryData, WidgetData } from "../../utils/types";

// The component props type uses the SummaryWidgetData interface
interface SummaryWidgetProps {
  widget: WidgetData<SummaryData>;
}

const SummaryWidget: React.FC<SummaryWidgetProps> = ({ widget }) => {
  // Render the summary widget using the data provided in the props
  return (
    <div>
      <h2>Summary for {widget.data.timePeriod}</h2>
      <div>
        <strong>Most Effective Hour:</strong>{" "}
        {widget.data.analysis.mostEffectiveHour.hour}{" "}
        {widget.data.analysis.mostEffectiveHour.meridiem}
        <p>
          Emails Opened: {widget.data.analysis.mostEffectiveHour.emailsOpened}
        </p>
      </div>
      <div>
        <strong>Next Best Hours:</strong>
        <ul>
          {widget.data.analysis.nextBestHours.map((hourData, index) => (
            <li key={index}>
              {hourData.hour} {hourData.meridiem}: {hourData.emailsOpened}{" "}
              emails opened
            </li>
          ))}
        </ul>
      </div>
      <p>{widget.data.summaryText}</p>
    </div>
  );
};

export default SummaryWidget;
