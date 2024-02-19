import React from "react";
import { WidgetData } from "../utils/types";
import { IoAdd } from "react-icons/io5";
import InputComponent from "./ui/InputComponent";
import navItem from "../assets/navItem.svg";
import Button from "./ui/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { widgets, saveWidgets } = useLocalStorage();

  const handleSave = () => {
    const newWidget: WidgetData = {
      id: Date.now().toString(),
      name: "New Widget",
      bgColor: "#ffffff",
      dimension: "1x1",
      type: "data",
      data: {},
    };
    saveWidgets([...widgets, newWidget]);
  };

  const viewWidgets = () => {
    console.log(widgets);
  }

  return (
    <>
      {/* Backdrop with opacity */}
      <div className="fixed inset-0 bg-[#0000003a] z-[30] cursor-pointer"></div>

      {/* Centered Modal */}

      <section className="fixed inset-0 flex items-center justify-center z-[40]">
        <div className="w-[90%] sm:w-[85%] md:w-[75%] lg:w-[65%] mx-auto bg-[#ffff] relative">
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
              <div className="">
                <InputComponent
                  type="text"
                  name="widgetName"
                  className="w-full border border-border_light rounded-md p-2"
                  placeholder="Widget Name"
                  value=""
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="viewer w-full md:w-[60%]">
                <div className="flex items-center justify-center h-[40vh] border border-border_light rounded-md">
                  <span>Widget Viewer</span>
                </div>
              </div>
              <div className="components md:w-[40%]">
                <span>Components</span>
                <div>
                  <span>Data</span>
                  <p>Random</p>
                </div>
                <div>
                  <span>Data</span>
                  <p>Random</p>
                </div>
                <div>
                  <span>Data</span>
                  <p>Random</p>
                </div>
                <div className="btn-group flex flex-col md:flex-row">
                  <Button
                    className="w-full text-gray_dark"
                    type="button"
                    onClick={() => {viewWidgets()}}
                  >
                    Re
                  </Button>
                  <Button
                    className="w-full text-gray_default"
                    type="button"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="w-full bg-brand text-white"
                    type="button"
                    onClick={handleSave}
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
