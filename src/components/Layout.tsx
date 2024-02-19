import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { useModalStateStore } from "../store/appStore";
import Modal from "./Modal";
import { WidgetData } from "../utils/types";

const Layout: React.FC = () => {
  const modalState = useModalStateStore((state) => state.modalState);
  const setModalState = useModalStateStore((state) => state.setModalState);

  const handleSaveWidget = (widgetData: WidgetData) => {
    // Logic to save the widget data goes here
    // ...

    // Close the modal after saving
    setModalState(false);
  };

  return (
    <>
      <main className="flex flex-col md:flex-row h-screen">
        <Navbar className="hidden w-full md:flex md:flex-col md:w-[7%] py-8 gap-10 border-r-2 border-gray_light" />
        <section className="w-full md:w-[93%]">
          <Header />
          <Dashboard />
        </section>
        <Navbar className="flex w-full z-30 md:hidden fixed bottom-0 border-t-2 border-gray_light py-2 px-4 md:gap-8" />
        {!!modalState && (
          <Modal
            isOpen={modalState}
            onClose={() => setModalState(false)}
            onSave={handleSaveWidget}
          />
        )}
      </main>
    </>
  );
};

export default Layout;
