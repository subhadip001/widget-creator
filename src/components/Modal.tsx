import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { PiClockCounterClockwise } from "react-icons/pi";
import InputComponent from "./ui/InputComponent";
import navItem from "../assets/navItem.svg";
import backPattern from "../assets/back_pattern.svg";
import Button from "./ui/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";
import WidgetTypeSelectorComponent from "./ui/WidgetTypeSelectorComponent";
import { useNewWidget, useWidgetStore } from "../store/appStore";
import DataWidget from "./widgets/DataWidget";
import { HiMagnifyingGlassPlus, HiMagnifyingGlassMinus } from "react-icons/hi2";
import GraphWidget from "./widgets/GraphWidget";
import SummaryWidget from "./widgets/SummaryWidget";
import { GraphData, SummaryData, TableData, WidgetData } from "../utils/types";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Component for creating and managing widgets for a database glossary.
 * @component
 * @prop {boolean} isOpen - Determines if the widget creation modal is open or not.
 * @prop {function} onClose - Function to close the widget creation modal.
 * @description
 *   - Uses local storage to fetch and save widgets.
 *   - Uses custom hooks to access and update widget store and new widget state.
 *   - Uses state to manage zoom level and new widget data.
 *   - Renders a modal with options to create and customize different types of widgets.
 */

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { fetchWidgets, saveWidgets } = useLocalStorage();
  const widgets = useWidgetStore((state) => state.widgets);
  const newWidget = useNewWidget((state) => state.newWidget);
  const setNewWidget = useNewWidget((state) => state.setNewWidget);

  const [zoom, setZoom] = useState(100);

  // Saving the new widget to local storage and update the widget store

  const handleSave = async () => {
    try {
      saveWidgets([...widgets, newWidget]);
      onClose();
      fetchWidgets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#00000057] z-[30] cursor-pointer"></div>

      <section className="fixed inset-0 flex items-center justify-center z-[40]">
        <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto bg-[#ffff] relative py-4 pt-3 px-3 md:py-10 md:pt-14 md:px-8 rounded-lg  overflow-hidden">
          <div
            onClick={() => {
              onClose();
            }}
            className="absolute top-4 z-[25] right-4 cursor-pointer"
          >
            <IoAdd className="rotate-45 text-2xl" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:gap-0 gap-3 md:flex-row justify-between md:items-center">
              <div className="flex items-center gap-3">
                <div className="md:w-[3.5rem] md:h-[3.5rem] w-[2.5rem] h-[2.5rem] relative">
                  <img
                    src={navItem}
                    className="w-full h-full object-cover rounded-md"
                    alt="navItem"
                  />
                  <div className="w-[336px] h-336px absolute top-0 left-0 -translate-x-[42%] -translate-y-[42%]">
                    <img src={backPattern} alt="back" />
                  </div>
                </div>

                <div className="flex flex-col md:gap-1 z-20">
                  <span className="md:text-[22px] text-lg font-semibold text-brand">
                    Create Widget
                  </span>
                  <span className="md:text-sm text-xs text-gray_default">
                    Manage the glossary of terms of your Database.
                  </span>
                </div>
              </div>
              <div className="md:w-[35%] relative">
                <InputComponent
                  type="text"
                  name="widgetName"
                  className="w-full"
                  placeholder="Enter Widget Name"
                  value={newWidget.name}
                  onChange={(e) => {
                    e.stopPropagation();
                    setNewWidget({ ...newWidget, name: e.target.value });
                  }}
                />
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setNewWidget({ ...newWidget, name: "" });
                  }}
                  className="absolute cursor-pointer right-1 top-[50%] -translate-y-[50%]"
                >
                  <IoAdd className="text-2xl rotate-45 text-[#898989]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="viewer md:h-[456px] bg-[#F8F8FF] relative w-full md:w-[65%]">
                <div className="flex md:h-full overflow-y-auto items-center justify-center h-[40vh] border border-border_light rounded-md">
                  <div className="absolute z-20 p-1 right-5 top-3 flex gap-1 items-center bg-[#ffff] border border-gray_light rounded-sm text-[#7B7B7B]">
                    <span className="px-3 py-1 bg-[#EDEDED] bg-opacity-20 text-[#7B7B7B] rounded-sm border border-gray_light">
                      {zoom}%
                    </span>
                    <div className="flex divide-x-[1px] divide-[#D7D7D7]">
                      <div className="px-2">
                        <HiMagnifyingGlassPlus
                          onClick={() => setZoom(zoom + 10)}
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="px-2">
                        <HiMagnifyingGlassMinus
                          onClick={() => setZoom(zoom - 10)}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-20 select-none left-6 top-5 text-[#5E5ADB] opacity-70 font-semibold text-lg">
                    {newWidget.dimension}
                  </div>
                  <div
                    style={{
                      transform: `scale(${zoom / 100})`,
                    }}
                  >
                    <span className="uppercase select-none block tracking-wider text-xs text-[#6B6B6B] font-bold text-center mb-1">
                      {newWidget.name}
                    </span>
                    {newWidget.type === "data" ? (
                      <DataWidget widget={newWidget as WidgetData<TableData>} />
                    ) : newWidget.type === "graph" ? (
                      <GraphWidget
                        widget={newWidget as WidgetData<GraphData>}
                      />
                    ) : newWidget.type === "summary" ? (
                      <SummaryWidget
                        widget={newWidget as WidgetData<SummaryData>}
                      />
                    ) : null}
                  </div>
                  <div className="absolute bottom-5 left-[50%] -translate-x-[50%] flex gap-3">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setNewWidget({ ...newWidget, bgColor: "#282828" });
                      }}
                      className={`block w-[22px] h-[22px] aspect-square rounded-full bg-gray_darker cursor-pointer border border-gray_darker ${
                        newWidget.bgColor === "#282828"
                          ? "ring-2 ring-offset-4 ring-[#D3D2F5]"
                          : ""
                      }`}
                    ></div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setNewWidget({ ...newWidget, bgColor: "#ffff" });
                      }}
                      className={`block w-[22px] h-[22px] aspect-square rounded-full bg-[#ffff] cursor-pointer border border-[#CECECE] ${
                        newWidget.bgColor === "#ffff"
                          ? "ring-2 ring-offset-4 ring-[#D3D2F5]"
                          : ""
                      }`}
                    ></div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setNewWidget({ ...newWidget, bgColor: "#5E5ADB" });
                      }}
                      className={`block w-[22px] h-[22px] aspect-square rounded-full bg-brand cursor-pointer border border-brand ${
                        newWidget.bgColor === "#5E5ADB"
                          ? "ring-2 ring-offset-4 ring-[#D3D2F5]"
                          : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="components flex flex-col md:gap-0 gap-3 md:w-[35%]">
                <div className="flex flex-col gap-2">
                  <span className="px-2 text-[#2b2b2b55] text-[13px] font-medium">
                    COMPONENTS
                  </span>
                  <div className="flex md:flex-col gap-2">
                    <WidgetTypeSelectorComponent
                      title="Data"
                      description="Random Description"
                      widgetType="data"
                    />
                    <WidgetTypeSelectorComponent
                      title="Graph"
                      description="Random Description"
                      widgetType="graph"
                      widgetSubType="bar"
                    />
                    <WidgetTypeSelectorComponent
                      title="Summary"
                      description="Random Description"
                      widgetType="summary"
                    />
                  </div>
                </div>
                <div className="btn-group flex gap-3 mt-auto">
                  <Button
                    className="w-[30%] h-[50px] flex justify-center items-center text-gray_dark bg-[#F8F8FF] border-gray_light rounded-md"
                    type="button"
                    onClick={() => {}}
                  >
                    <PiClockCounterClockwise className="text-xl text-[#A9A9A9]" />
                  </Button>
                  <Button
                    className="w-[53%] h-[50px] text-gray_default border-gray_light rounded-md"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="w-[53%] h-[50px] bg-brand text-[#ffff] border-brand rounded-md"
                    type="button"
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;
