import React, { useState } from 'react';
import { TableData } from '../../utils/types';

interface DataWidgetProps {
  data: TableData;
}

const DataWidget: React.FC<DataWidgetProps> = ({ data }) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(data.timeFilter[0]);

  return (
    <div>
      {/* Time Filter */}
      <div>
        {data.timeFilter.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedTimeFilter(filter)}
            className={`p-2 ${selectedTimeFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Table */}
      <table className="min-w-full">
        <thead>
          <tr>
            {data.columns.map((column) => (
              <th key={column.id} className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {data.columns.map((column) => (
                <td key={column.id} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataWidget;
