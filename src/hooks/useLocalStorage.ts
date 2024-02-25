import { encryptData, decryptData } from "../utils/encryption";
import { GraphData, SummaryData, TableData, WidgetData } from "../utils/types";
import { useWidgetStore } from "../store/appStore";

const WIDGETS_LOCAL_STORAGE_KEY = "widgets-encrypted";

/**
 * Saves the provided widgets to local storage and updates the widget store state.
 * @returns {object} An object with the fetchWidgets and saveWidgets functions.
 * @description   - Encrypts the provided widgets before saving them to local storage.
  - Uses the setWidgets function from the useWidgetStore hook to update the widget store state.
  - Logs any errors that occur during the saving process.
  - Returns an object with the fetchWidgets and saveWidgets functions.
 */
export const useLocalStorage = () => {
  const setWidgets = useWidgetStore((state) => state.setWidgets);

  const saveWidgets = async (
    widgets: WidgetData<TableData | GraphData | SummaryData>[]
  ) => {
    return new Promise<void>((resolve, reject) => {
      try {
        const encryptedData = encryptData(widgets);
        window.localStorage.setItem(WIDGETS_LOCAL_STORAGE_KEY, encryptedData);
        setWidgets(widgets);
        resolve();
      } catch (error) {
        console.log(error);
        reject();
      }
    });
  };

  const fetchWidgets = () => {
    try {
      const item = window.localStorage.getItem(WIDGETS_LOCAL_STORAGE_KEY);
      const widgets = item ? decryptData(item) : [];
      setWidgets(widgets);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWidgets,
    saveWidgets,
  };
};
