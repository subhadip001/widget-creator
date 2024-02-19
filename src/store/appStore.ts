import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface ModalStateStore {
  modalState: boolean;
  setModalState: (state: boolean) => void;
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


export { useTabStore, useModalStateStore };
