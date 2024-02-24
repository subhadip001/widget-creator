import { BarGraphData, LineGraphData, PieGraphData } from "./types";

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
