export type TableData = {
  timeFilter: string[];
  columns: { id: string; label: string }[];
  rows: { [key: string]: string }[];
};

export type BarGraphData = {
  timeFilterOptions: string[];
  selectedTimeFilter: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
};

export type LineGraphData = {
  timeFilterOptions: string[];
  selectedTimeFilter: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
    }[];
  };
};

export type PieGraphData = {
  timeFilterOptions: string[];
  selectedTimeFilter: string;
  totalOrders: number;
  orderCategories: OrderCategory[];
};

type OrderCategory = {
  category: string;
  count: number;
  color: string;
};

export type GraphData = BarGraphData | LineGraphData | PieGraphData;

type AnalysisData = {
  mostEffectiveHour: EffectiveHourData;
  nextBestHours: EffectiveHourData[];
};

type EffectiveHourData = {
  hour: string;
  meridiem: "AM" | "PM";
  emailsOpened: number;
};

export type SummaryData = {
  timePeriod: string;
  analysis: AnalysisData;
  summaryText: string;
};

export type WidgetData = {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  dimension: string;
  title: string;
  description?: string;
  type: "data" | "graph" | "summary";
  subType?: "bar" | "line" | "pie" | undefined;
  data: TableData | GraphData | SummaryData;
};

export type ButtonProps = {
  children: React.ReactNode | string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: () => void;
};

export type TabProps = {
  label: string;
  active: boolean;
};

export type WidgetTypeSelectorComponentProps = {
  title: string;
  description: string;
  widgetType: "data" | "graph" | "summary";
  widgetSubType?: "bar" | "line" | "pie" | undefined;
};

export type InputComponentProps = {
  name: string;
  className?: string;
  value: string;
  placeholder: string;
  type: "text" | "password" | "email" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type NaviconProps = {
  children: React.ReactNode;
  active: boolean;
  className?: string;
  onClick?: () => void;
};

export type HeadericonProps = {
  children: React.ReactNode;
  active: boolean;
  className?: string;
  onClick?: () => void;
};
