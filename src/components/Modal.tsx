// Modal.tsx
import React from "react";
import { WidgetData } from "../utils/types"; // Make sure to define this type according to your needs
import { IoAdd } from "react-icons/io5";
import InputComponent from "./ui/InputComponent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (widgetData: WidgetData) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const handleSave = () => {
    const newWidget: WidgetData = {
      id: Date.now().toString(),
      name: "New Widget",
      type: "data",
      settings: {},
    };
    onSave(newWidget);
  };

  return (
    <>
      {/* Backdrop with opacity */}
      <div className="fixed inset-0 bg-[#0000003a] z-[30] cursor-pointer"></div>

      {/* Centered Modal */}

      <section className="fixed inset-0 flex items-center justify-center z-[40]">
        <div className="w-[60%] mx-auto bg-[#ffff] relative">
          <div
            onClick={() => {
              onClose();
              console.log("clicked");
            }}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <IoAdd className="rotate-45 text-2xl" />
          </div>
          <div className="flex justify-between items-center">
            <div className="left">
              <span>Create Widget</span>
              <p>Manage the glossary of terms of your Database.</p>
            </div>
            <div className="right">
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
        </div>
      </section>
    </>
  );
};

export default Modal;
