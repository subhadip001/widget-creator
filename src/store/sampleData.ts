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
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Processed",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: "#5FDC8F",
      },
      {
        label: "Shipped",
        data: [2, 3, 20, 5, 1, 4, 9],
        backgroundColor: "#FF8E8E",
      },
      {
        label: "Returned",
        data: [3, 10, 13, 15, 22, 30, 12],
        backgroundColor: "#F2E144",
      },
      {
        label: "Cancelled",
        data: [3, 10, 13, 15, 22, 30, 12],
        backgroundColor: "#82D1DB",
      },
    ],
  },
};

export const sampleLineGraphData: LineGraphData = {
  timeFilterOptions: ["7d", "14d", "30d"],
  selectedTimeFilter: "7d",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Processed",
        data: [12, 19, 3, 5, 2, 3, 9],
        borderColor: "#5FDC8F",
        fill: false,
      },
      {
        label: "Shipped",
        data: [2, 3, 20, 5, 1, 4, 9],
        borderColor: "#FF8E8E",
        fill: false,
      },
      {
        label: "Returned",
        data: [3, 10, 13, 15, 22, 30, 12],
        borderColor: "#F2E144",
        fill: false,
      },
      {
        label: "Cancelled",
        data: [3, 10, 13, 15, 22, 30, 12],
        borderColor: "#82D1DB",
        fill: false,
      },
    ],
  },
};

export const samplePieGraphData = {
  timeFilterOptions: ["7d", "14d", "30d"],
  selectedTimeFilter: "7d",
  totalOrders: 89000,
  orderCategories: [
    {
      category: "Processed",
      count: 30000,
      color: "#54D787",
    },
    {
      category: "Shipped",
      count: 25000,
      color: "#5E5ADB",
    },
    {
      category: "Returned",
      count: 15000,
      color: "#F2E144",
    },
    {
      category: "Cancelled",
      count: 19000,
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
