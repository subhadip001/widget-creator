import React, { useState } from "react";
import { WidgetData } from "../utils/types";
import { IoAdd } from "react-icons/io5";
import { PiClockCounterClockwise } from "react-icons/pi";
import InputComponent from "./ui/InputComponent";
import navItem from "../assets/navItem.svg";
import Button from "./ui/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";
import WidgetTypeSelectorComponent from "./ui/WidgetTypeSelectorComponent";
import {
  samplePieGraphData,
  sampleSummaryData,
  sampleTableData,
} from "../store/sampleData";
import { useNewWidget } from "../store/appStore";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { widgets, saveWidgets } = useLocalStorage();
  const newWidget = useNewWidget((state) => state.newWidget);
  const setNewWidget = useNewWidget((state) => state.setNewWidget);

  const handleSave = (
    name: string,
    category: string,
    bgColor: string,
    dimension: string,
    title: string,
    description: string,
    type: "data" | "graph" | "summary",
    subType?: "bar" | "line" | "pie"
  ) => {
    const newWidget: WidgetData = {
      id: Date.now().toString(),
      name,
      category,
      bgColor,
      dimension,
      title,
      description,
      type,
      data: samplePieGraphData,
      subType,
    };
    saveWidgets([...widgets, newWidget]);
  };

  const viewWidgets = () => {
    console.log(widgets);
  };

  return (
    <>
      {/* Backdrop with opacity */}
      <div className="fixed inset-0 bg-[#0000003a] z-[30] cursor-pointer"></div>

      {/* Centered Modal */}

      <section className="fixed inset-0 flex items-center justify-center z-[40]">
        <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto bg-[#ffff] relative py-5">
          <div
            onClick={() => {
              onClose();
              console.log("closed");
            }}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <IoAdd className="rotate-45 text-2xl" />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <img src={navItem} alt="navItem" />
                <div>
                  <span>Create Widget</span>
                  <p>Manage the glossary of terms of your Database.</p>
                </div>
              </div>
              <div className="w-[35%] relative">
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
              <div className="viewer md:h-[456px] w-full md:w-[65%]">
                <div className="flex md:h-full  overflow-y-auto items-center justify-center h-[40vh] border border-border_light rounded-md">
                  <pre>
                    <code>{JSON.stringify(newWidget, null, 2)}</code>
                  </pre>
                </div>
              </div>
              <div className="components flex flex-col md:w-[35%]">
                <div className="flex flex-col gap-2">
                  <span className="px-2 text-[#2b2b2b55] text-[13px] font-medium">
                    COMPONENTS
                  </span>
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
                <div className="btn-group flex gap-3 mt-auto">
                  <Button
                    className="w-[30%] h-[50px] flex justify-center items-center text-gray_dark bg-[#F8F8FF] border-gray_light rounded-md"
                    type="button"
                    onClick={() => {
                      viewWidgets();
                    }}
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
                      handleSave(
                        "name",
                        "customer",
                        "#fffff",
                        "1x1",
                        "title",
                        "random",
                        "graph",
                        "pie"
                      );
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
