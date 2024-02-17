import { useState } from "react";
import { encryptData, decryptData } from "../utils/encryption";
import { WidgetData } from "../utils/types";

const WIDGETS_LOCAL_STORAGE_KEY = "widgets";

export const useLocalStorage = () => {
  const [widgets, setWidgets] = useState<WidgetData[]>(() => {
    try {
      const item = window.localStorage.getItem(WIDGETS_LOCAL_STORAGE_KEY);
      return item ? decryptData(item) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const saveWidgets = (widgets: WidgetData[]) => {
    try {
      const encryptedData = encryptData(widgets);
      window.localStorage.setItem(WIDGETS_LOCAL_STORAGE_KEY, encryptedData);
      setWidgets(widgets);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    widgets,
    saveWidgets,
  };
};
