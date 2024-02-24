import {
  BarGraphData,
  LineGraphData,
  SummaryData,
  TableData,
} from "../utils/types";

export const sampleTableData: TableData = {
  timeFilter: ["7d", "14d", "30d"],
  columns: [
    { id: "product", label: "PRODUCT" },
    { id: "q1_23", label: "Q1-23" },
    { id: "q2_23", label: "Q2-23" },
  ],
  rows: [
    { product: "Reusable", q1_23: "10%", q2_23: "4%" },
    { product: "Natural", q1_23: "2%", q2_23: "11%" },
    { product: "Compost", q1_23: "7%", q2_23: "5%" },
    { product: "Reusable..", q1_23: "3%", q2_23: "4%" },
    { product: "Total", q1_23: "8%", q2_23: "12%" },
  ],
};

export const sampleBarGraphData: BarGraphData = {
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

export const sampleLineGraphData: LineGraphData = {
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

const processedCount = Math.floor(Math.random() * (40000 - 30000 + 1)) + 30000;
const shippedCount =
  Math.floor(Math.random() * (processedCount - 20000 + 1)) + 20000;
const returnedCount =
  Math.floor(Math.random() * (shippedCount - 10000 + 1)) + 10000;
const cancelledCount =
  Math.floor(Math.random() * (returnedCount - 5000 + 1)) + 5000;

export const samplePieGraphData = {
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

export const sampleSummaryData: SummaryData = {
  timePeriod: "Today",
  analysis: {
    mostEffectiveHour: {
      hour: "15:00",
      meridiem: "PM",
      emailsOpened: 5041,
    },
    nextBestHours: [
      {
        hour: "16:00",
        meridiem: "PM",
        emailsOpened: 5007,
      },
      {
        hour: "17:00",
        meridiem: "PM",
        emailsOpened: 4785,
      },
    ],
  },
  summaryText:
    "Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of 5041 emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with 5007 and 4785 emails opened respectively. There is a noticeable drop in",
};
