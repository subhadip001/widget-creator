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

/**
 * Creates a new widget with the given properties and sets it as the new widget in the state.
 * @param {WidgetData} widget - Object containing the properties of the new widget.
 * @returns {void} No return value.
 * @description
 *   - The new widget will have a unique id generated using the current date and time.
 *   - The category of the new widget will be set to "customers".
 *   - The background color of the new widget will be set to "#ffff".
 *   - The dimension of the new widget will be set to "1x1".
 */

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
