import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WidgetData } from "../utils/types";

interface TabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface ModalStateStore {
  modalState: boolean;
  setModalState: (state: boolean) => void;
}

interface WidgetStore {
  widgets: WidgetData[];
  addWidget: (widget: WidgetData) => void;
  removeWidget: (id: string) => void;
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

const useWidgetStore = create<WidgetStore>((set) => ({
  widgets: [],
  addWidget: (widget: any) =>
    set((state) => ({ widgets: [...state.widgets, widget] })),
  removeWidget: (id: string) =>
    set((state) => ({
      widgets: state.widgets.filter((widget: any) => widget.id !== id),
    })),
}));

export { useTabStore, useModalStateStore, useWidgetStore };
