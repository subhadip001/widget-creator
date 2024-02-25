import { BarGraphData, LineGraphData, PieGraphData } from "./types";

/**
 * Generates sample data for a bar graph.
 * @example
 * getSampleBarGraphData()
 * @returns {BarGraphData} Returns an object with time filter options, selected time filter, and data for a bar graph.
 * @description
 *   - This function generates random data for a bar graph.
 *   - The time filter options are "7d", "14d", and "30d".
 *   - The selected time filter is set to "7d" by default.
 *   - The data includes a title and an array of categories with names, values, and colors.
 */
export function getSampleBarGraphData(): BarGraphData {
  return {
    timeFilterOptions: ["7d", "14d", "30d"],
    selectedTimeFilter: "7d",
    data: {
      title: "Sales by Category",
      categories: [
        {
          name: "Category A",
          value: Math.floor(Math.random() * (40000 - 100 + 1)) + 100,
          color: "#ffca28",
        },
        {
          name: "Category B",
          value: Math.floor(Math.random() * (40000 - 100 + 1)) + 100,
          color: "#ff7043",
        },
        {
          name: "Category C",
          value: Math.floor(Math.random() * (40000 - 100 + 1)) + 100,
          color: "#29b6f6",
        },
        {
          name: "Category D",
          value: Math.floor(Math.random() * (40000 - 100 + 1)) + 100,
          color: "#66bb6a",
        },
        {
          name: "Category E",
          value: Math.floor(Math.random() * (40000 - 10 + 1)) + 10,
          color: "#ab47bc",
        },
      ],
    },
  };
}

/**
 * Returns sample line graph data for display.
 * @returns {LineGraphData} Object containing time filter options, selected time filter, and data series.
 * @description
 *   - The time filter options are "7d", "14d", and "30d".
 *   - The selected time filter is "7d" by default.
 *   - The data series contains three categories: "Category A", "Category B", and "Category C".
 *   - Each category has a unique color and an array of data points, with each data point representing a day and a randomly generated value.
 */
export function getSampleLineGraphData(): LineGraphData {
  return {
    timeFilterOptions: ["7d", "14d", "30d"],
    selectedTimeFilter: "7d",
    dataSeries: [
      {
        name: "Category A",
        color: "#5FDC8F",
        dataPoints: Array.from({ length: 5 }, (_, i) => ({
          time: `Day ${i + 1}`,
          value: Math.floor(Math.random() * (40000 - 10 + 1)) + 10,
        })),
      },
      {
        name: "Category B",
        color: "#96D3FF",
        dataPoints: Array.from({ length: 5 }, (_, i) => ({
          time: `Day ${i + 1}`,
          value: Math.floor(Math.random() * (40000 - 10 + 1)) + 10,
        })),
      },
      {
        name: "Category C",
        color: "#FF8E8E",
        dataPoints: Array.from({ length: 5 }, (_, i) => ({
          time: `Day ${i + 1}`,
          value: Math.floor(Math.random() * (40000 - 10 + 1)) + 10,
        })),
      },
    ],
  };
}

/**
 * Generates sample data for a pie graph based on randomly generated order counts.
 * @returns {Object} Returns an object with time filter options, selected time filter, total number of orders, and order categories with corresponding counts and colors.
 * @description
 *   - Uses Math.floor and Math.random to generate random order counts.
 *   - Includes options for different time filters.
 *   - Returns an object with all necessary data for a pie graph.
 *   - Categories include processed, shipped, returned, and cancelled orders.
 */
export function getSamplePieGraphData(): PieGraphData {
  const processedCount =
    Math.floor(Math.random() * (40000 - 30000 + 1)) + 30000;
  const shippedCount =
    Math.floor(Math.random() * (processedCount - 20000 + 1)) + 20000;
  const returnedCount =
    Math.floor(Math.random() * (shippedCount - 10000 + 1)) + 10000;
  const cancelledCount =
    Math.floor(Math.random() * (returnedCount - 5000 + 1)) + 5000;

  return {
    timeFilterOptions: ["7d", "14d", "30d"],
    selectedTimeFilter: "7d",
    totalOrders: processedCount + shippedCount + returnedCount + cancelledCount,
    orderCategories: [
      {
        category: "Processed",
        count: processedCount,
        color: "#54D787",
      },
      {
        category: "Shipped",
        count: shippedCount,
        color: "#29b6f6",
      },
      {
        category: "Returned",
        count: returnedCount,
        color: "#F2E144",
      },
      {
        category: "Cancelled",
        count: cancelledCount,
        color: "#FF6969",
      },
    ],
  };
}
