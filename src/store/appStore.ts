import { create } from "zustand";
import { persist } from "zustand/middleware";
import { sampleTableData } from "./sampleData";
import { WidgetData } from "../utils/types";

interface TabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface ModalStateStore {
  modalState: boolean;
  setModalState: (state: boolean) => void;
}

interface NewWidgetStore {
  newWidget: object;
  setNewWidget: (widget: object) => void;
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

/* const [newWidget, setNewWidget] = useState<WidgetData>({
    id: "",
    name: "",
    category: "",
    bgColor: "",
    dimension: "",
    title: "",
    description: "",
    type: "data",
    data: sampleTableData,
  });

  create a useCreateNewWidget using above data
  */

const useNewWidget = create<NewWidgetStore>((set) => ({
  newWidget: {
    id: "",
    name: "",
    category: "",
    bgColor: "",
    dimension: "",
    title: "",
    description: "",
    type: "data",
    data: sampleTableData,
  },
  setNewWidget: (widget: object) => set(() => ({ newWidget: widget })),
}));

export { useTabStore, useModalStateStore, useNewWidget };
