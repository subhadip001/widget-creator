import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row h-screen">
        <Navbar className="hidden w-full md:flex md:flex-col md:w-[7%] py-8 gap-10 border-r-2 border-gray_light" />
        <section className="w-full md:w-[93%]">
          <Header />
          <Dashboard />
        </section>
        <Navbar className="flex w-full z-50 md:hidden fixed bottom-0 py-2 px-4 gap-8" />
      </main>
    </>
  );
};

export default Layout;
