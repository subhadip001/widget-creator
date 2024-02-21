export type WidgetData = {
  id: string;
  name: string;
  category: string;
  bgColor: string;
  dimension: string;
  title: string;
  description?: string;
  type: "data" | "graph" | "summary";
  subType?: "bar" | "line" | "pie";
  data: object;
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
  widgetSubType?: "bar" | "line" | "pie";
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
