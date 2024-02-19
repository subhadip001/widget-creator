import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
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

export { useTabStore };

// export const useWidgetStore = create(
//   persist(
//     (set) => ({
//       widgets: [],
//       addWidget: (widget: any) => set((state) => ({ widgets: [...state.widgets, widget] })),
//       removeWidget: (id: string) => set((state) => ({ widgets: state.widgets.filter((widget: any) => widget.id !== id) })),
//     }),
//     {
//       name: "widget-store",
//     }
//   )
// );
