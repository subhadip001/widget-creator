import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { useModalStateStore } from "../store/appStore";
import Modal from "./Modal";

const Layout: React.FC = () => {
  const modalState = useModalStateStore((state) => state.modalState);
  const setModalState = useModalStateStore((state) => state.setModalState);

  return (
    <>
      <main className="flex flex-col md:flex-row h-screen">
        <Navbar className="hidden w-full md:flex md:flex-col md:w-[6%] py-8 gap-10 border-r-2 border-gray_light" />
        <section className="w-full md:w-[94%]">
          <Header />
          <Dashboard />
        </section>
        <Navbar className="flex w-full z-30 md:hidden fixed bottom-0 border-t-2 border-gray_light py-2 px-4 md:gap-8" />
        {!!modalState && (
          <Modal isOpen={modalState} onClose={() => setModalState(false)} />
        )}
      </main>
    </>
  );
};

export default Layout;
