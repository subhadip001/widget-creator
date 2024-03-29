import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { useModalStateStore } from "../store/appStore";
import Modal from "./Modal";

/**
 * Main component for the application's dashboard page
 * @component
 * @prop {boolean} modalState - Indicates whether the modal is open or not
 * @description
 *   - Uses state hook to store and retrieve modal state
 *   - Renders a Navbar component and a section with a Header and Dashboard component
 *   - Conditionally renders a Modal component if modalState is true
 */
const Layout: React.FC = () => {
  const modalState = useModalStateStore((state) => state.modalState);
  const setModalState = useModalStateStore((state) => state.setModalState);

  return (
    <>
      <main className="flex flex-col md:flex-row h-screen overflow-hidden">
        <Navbar className="hidden w-full md:flex md:flex-col bg-[#ffff] md:w-[6%] py-8 gap-10 border-r-2 border-gray_light" />
        <section className="w-full md:w-[94%] bg-brand_light">
          <Header />
          <Dashboard />
        </section>
        <Navbar className="flex w-full bg-[#ffff] z-30 md:hidden fixed bottom-0 border-t-2 border-gray_light py-2 px-4 md:gap-8" />
        {!!modalState && (
          <Modal
            isOpen={modalState}
            onClose={() => {
              setModalState(false);
            }}
          />
        )}
      </main>
    </>
  );
};

export default Layout;
