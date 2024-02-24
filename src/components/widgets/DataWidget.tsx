import React, { useState } from "react";
import { TableData, WidgetData } from "../../utils/types";

interface DataWidgetProps {
  widget: WidgetData;
}

const DataWidget: React.FC<DataWidgetProps> = ({ widget }) => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState(
    (widget.data as TableData).timeFilter[0]
  );

  return (
    // <div>
    //   <div>
    //     {data.timeFilter.map((filter) => (
    //       <button
    //         key={filter}
    //         onClick={() => setSelectedTimeFilter(filter)}
    //         className={`p-2 ${selectedTimeFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    //       >
    //         {filter}
    //       </button>
    //     ))}
    //   </div>
    //   <table className="min-w-full">
    //     <thead>
    //       <tr>
    //         {data.columns.map((column) => (
    //           <th key={column.id} className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //             {column.label}
    //           </th>
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.rows.map((row, index) => (
    //         <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
    //           {data.columns.map((column) => (
    //             <td key={column.id} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    //               {row[column.id]}
    //             </td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <section
      style={{
        backgroundColor: widget.bgColor,
      }}
      className="z-30 py-3 rounded-2xl shadow-md w-[15rem]"
    >
      <div className="flex border-b-2 border-border_light">
        {(widget.data as TableData).timeFilter.map((filter) => (
          <div
            key={filter}
            onClick={() => setSelectedTimeFilter(filter)}
            className={`px-5 py-1 cursor-pointer ${
              selectedTimeFilter === filter
                ? "border-b-4 border-brand text-brand"
                : "text-gray_default"
            }`}
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="py-3 px-6">
        <table className="min-w-full">
          <thead>
            <tr>
              {(widget.data as TableData).columns.map((column, i) => (
                <th
                  key={column.id}
                  className={`text-xs font-bold text-gray_default uppercase ${
                    i === 0 ? "text-start" : "text-center"
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(widget.data as TableData).rows.map((row, index) => (
              <tr key={index}>
                {(widget.data as TableData).columns.map((column, i) => (
                  <td
                    key={column.id}
                    className={`text-xs ${
                      i === 0 ? "text-start" : "text-center"
                    } text-gray_default ${
                      index === (widget.data as TableData).rows.length - 1
                        ? "font-bold text-gray_dark mt-2"
                        : ""
                    }`}
                  >
                    {row[column.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataWidget;
