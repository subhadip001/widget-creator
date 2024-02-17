export type WidgetData = {
  id: string;
  type: string; // e.g., 'chart', 'table', 'summary', etc.
  settings: Record<string, any>; // Settings specific to the widget type
};

export type ButtonProps = {
  children: React.ReactNode | string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: () => void;
};
