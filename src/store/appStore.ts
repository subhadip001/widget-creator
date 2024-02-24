import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sampleTableData } from "./sampleData";
import { GraphData, SummaryData, TableData, WidgetData } from "../utils/types";

interface TabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface ModalStateStore {
  modalState: boolean;
  setModalState: (state: boolean) => void;
}

interface NewWidgetStore<T> {
  newWidget: WidgetData<T>;
  setNewWidget: (widget: WidgetData<T>) => void;
}

interface WidgetStore {
  widgets: WidgetData<TableData | SummaryData | GraphData>[];
  setWidgets: (
    widgets: WidgetData<TableData | SummaryData | GraphData>[]
  ) => void;
}

const useTabStore = create<TabStore, [["zustand/persist", TabStore]]>(
  persist(
    (set) => ({
      activeTab: "customers",
      setActiveTab: (tab: string) => set(() => ({ activeTab: tab })),
    }),
    {
      name: "app-store",
    }
  )
);

const useModalStateStore = create<
  ModalStateStore,
  [["zustand/persist", ModalStateStore]]
>(
  persist(
    (set) => ({
      modalState: false,
      setModalState: (state: boolean) => set(() => ({ modalState: state })),
    }),
    {
      name: "modal-store",
    }
  )
);

const useNewWidget = create<
  NewWidgetStore<TableData | SummaryData | GraphData>
>((set) => ({
  newWidget: {
    id: Date.now().toString(),
    name: "Reusability Scores",
    category: "customers",
    bgColor: "#ffff",
    dimension: "1x1",
    title: "Data",
    description: "Random description",
    type: "data",
    data: sampleTableData,
  },
  setNewWidget: (widget: WidgetData<TableData | SummaryData | GraphData>) =>
    set(() => ({ newWidget: widget })),
}));

const useWidgetStore = create<WidgetStore>((set) => ({
  widgets: [],
  setWidgets: (widgets: WidgetData<TableData | SummaryData | GraphData>[]) =>
    set(() => ({ widgets })),
}));

export { useTabStore, useModalStateStore, useNewWidget, useWidgetStore };
