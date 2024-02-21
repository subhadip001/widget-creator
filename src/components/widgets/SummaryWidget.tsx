import React from 'react';
import { SummaryData } from '../../utils/types';

// The component props type uses the SummaryWidgetData interface
interface SummaryWidgetProps {
  data: SummaryData;
}

const SummaryWidget: React.FC<SummaryWidgetProps> = ({ data }) => {
  // Render the summary widget using the data provided in the props
  return (
    <div>
      <h2>Summary for {data.timePeriod}</h2>
      <div>
        <strong>Most Effective Hour:</strong> {data.analysis.mostEffectiveHour.hour} {data.analysis.mostEffectiveHour.meridiem}
        <p>Emails Opened: {data.analysis.mostEffectiveHour.emailsOpened}</p>
      </div>
      <div>
        <strong>Next Best Hours:</strong>
        <ul>
          {data.analysis.nextBestHours.map((hourData, index) => (
            <li key={index}>
              {hourData.hour} {hourData.meridiem}: {hourData.emailsOpened} emails opened
            </li>
          ))}
        </ul>
      </div>
      <p>{data.summaryText}</p>
    </div>
  );
};

export default SummaryWidget;
